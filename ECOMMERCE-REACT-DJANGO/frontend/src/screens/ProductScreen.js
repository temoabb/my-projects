import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';

import Rating from '../components/Rating';
import products from '../products';


const ProductScreen = ({ match }) => {
  const product = products.find(product => product._id == match.params.id)
  return (
    <div>
      Product
    </div>
  )
}

export default ProductScreen;