import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import CartCalculation from '../cart-calculation';

import './total-donation.scss';

export default class TotalDonation extends Component {
  render() {
    return (
      <div>
        <Card className="total-donation-card">
          <Card.Body>
            <Row>
              <Col md={4}></Col>
              <Col md={8}>
                <Card.Title> $ 1400</Card.Title>
                <p> of Zokat will remain</p>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <a className="link" href="#">
                  Add More Projects
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <CartCalculation />
      </div>
    );
  }
}
