import { useCallback, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'SENT':
      return {
        data: null,
        status: 'pending',
        error: null
      }
    case 'SUCCESS':
      return {
        error: null,
        data: action.payload,
        status: 'completed',
      }
    case 'ERROR':
      return {
        data: null,
        status: 'completed',
        error: action.payload.errorMessage || "ERROR!"
      }
    default:
      throw new Error("SOmething went wrong")
  }
};

const useHttp = (requestFunction, isPending = false) => {
  console.log('custom hook is running');
  const [dataState, dataDispatch] = useReducer(reducer, {
    data: null,
    status: isPending ? 'pending' : null,
    error: null
  });

  const sendRequest = useCallback(
    async requestData => {
      dataDispatch({ type: 'SENT' });

      try {
        const responseData = await requestFunction(requestData);
        // console.log('response in hook', responseData);
        dataDispatch({ type: 'SUCCESS', payload: responseData })

      } catch (error) {
        dataDispatch({
          type: 'ERROR',
          payload: { errorMessage: error.message }
        })
      }

    }, [requestFunction])


  return {
    ...dataState,
    sendRequest
  }
};

export default useHttp;