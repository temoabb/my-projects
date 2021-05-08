import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 'useDispatch' is going to fire off actions. It is like useContext()

// 'useSelector' lets us to select sertain, specific part of a state, or our redux store. What do we mean?
// In store we have got:

// const reducer = combineReducers({
//   productList: productListReducer,
// });

// and for ex. we want to use 'productList'. 

import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';

import { listProducts } from '../actions/productActions';



const HomeScreen = () => {

  // @returns — redux store's dispatch function
  const dispatch = useDispatch()
  // to actually call for example 'listProducts' action.


  const productList = useSelector(state => state.productList) // to specify which part we want
  // pay attention: this is redux general store:

  // const reducer = combineReducers({
  //   productList: productListReducer,
  // });

  // console.log('productList', productList)


  const { error, loading, products } = productList;


  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])


  return (
    <div>

      <h1>Latest Products</h1>

      {loading ? <Loader />
        : error ? <Message variant="danger">{error}</Message>
          : <Row>
            {
              products.map(({ _id, ...theRestProps }) => (
                <Col key={_id} sm={12} md={6} lg={4} xl={3}>
                  <Product _id={_id} {...theRestProps} />
                </Col>
              ))
            }
          </Row>}
    </div>
  )
};




export default HomeScreen;