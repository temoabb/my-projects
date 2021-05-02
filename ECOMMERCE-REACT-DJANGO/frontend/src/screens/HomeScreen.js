import React from 'react';

import products from '../products';
import Product from '../components/Product';

import { Row, Col } from 'react-bootstrap';


const HomeScreen = () => {
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
