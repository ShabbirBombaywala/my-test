import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import CartCalculation from '../cart-calculation';

import './total-donation.scss';

export default class TotalDonation extends Component {
  render() {
    const { donations, user } = this.props;
    const raisedAmount = () => {
      let initialValue = 0;
      let sum =
        donations &&
        donations.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.raisedAmount),
          initialValue
        );
      return sum;
    };
    return (
      <div>
        <Card className="total-donation-card">
          <Card.Body>
            <Row>
              <Col md={4}></Col>
              <Col md={8}>
                <Card.Title>
                  $ {raisedAmount()} {` of ${user.goal}`}
                </Card.Title>
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
        <CartCalculation donations={donations} />
      </div>
    );
  }
}
