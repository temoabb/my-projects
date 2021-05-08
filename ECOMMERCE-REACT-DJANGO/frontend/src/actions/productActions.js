import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,

  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,

} from '../constants/productConstants';


// This function is going to be in charge of replacing the API call that we made in our 'HomeScreen'.


// Here comes redux thunk. He allows us to make a function inside function :
export const listProducts = () => async (dispatch) => {
  try {
    // this is going to fire our first reducer 
    dispatch({ type: PRODUCT_LIST_REQUEST })

    // 'pip install django-cors-headers'

    // and after install that, in backend, in 'settings.py' file in 'INSTALLED_APPS'
    // we have to add:
    // 'corsheaders'

    // and in 'MIDDLEWARE' in the TOP LEVEL (i.e. above all)
    // we have to add:
    // 'corsheaders.middleware.CorsMiddleware',

    // after that last step, we have to write at the bottom of 'settings.py' file:
    // CORS_ALLOW_ALL_ORIGINS = True

    // This means allow any URL, any port to go ahead and make call on port 8000
    const { data } = await axios.get('/api/products/')

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {

    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
};







export const listProductDetails = (id) => async (dispatch) => {

  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })

  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
};