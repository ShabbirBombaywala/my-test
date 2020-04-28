import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

import './cart-calculation.scss';

export default class CartCalculation extends Component {
  render() {
    return (
      <div>
        <Card className="cart-calculation">
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Title> $ 280</Card.Title>
                <p> Total due today</p>
              </Col>
              <Col md={6}>
                <Card.Title> $ 15</Card.Title>
                <p> Including monthly payment</p>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Button className="continue-button" variant="success" block>
                  Continue
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
