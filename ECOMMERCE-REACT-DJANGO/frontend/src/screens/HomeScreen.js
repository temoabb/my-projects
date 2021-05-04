import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Row, Col } from 'react-bootstrap';

import Product from '../components/Product';
// import products from '../products';

const HomeScreen = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {

    // console.log('useEffect triggered');

    const fetchProducts = async () => {
      const { data } = await axios.get('http://127.0.0.1:8000/api/products/');
      // console.log('data', data);
      setProducts(data);
    }

    fetchProducts();

  }, [])


  return (
    <div>
      <h1>Latest Products</h1>

      <Row>
        {
          products.map(({ _id, ...theRestProps }) => (
            <Col key={_id} sm={12} md={6} lg={4} xl={3}>
              <Product _id={_id} {...theRestProps} />
            </Col>
          ))
        }
      </Row>

    </div>
  )
};

export default HomeScreen;
