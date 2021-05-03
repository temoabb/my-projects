import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';

import Rating from '../components/Rating';
import products from '../products';


const ProductScreen = ({ match }) => {
  // console.log('match', match);

  const product = products.find(product => product._id === match.params.id);

  // console.log('product', product)

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>

        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>


              <ListGroup.Item>
                <Button className="btn btn-block" type="button" disabled={product.countInStock === 0} >
                  Add to cart
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen;