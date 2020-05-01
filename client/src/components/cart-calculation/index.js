import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

import './cart-calculation.scss';

export default class CartCalculation extends Component {
  render() {
    const { donations } = this.props;
    const dueToday = () => {
      let initialValue = 0;
      let sum =
        donations &&
        donations
          .filter((donation) => donation.oneTime)
          .reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.raisedAmount),
            initialValue
          );
      return sum;
    };
    const monthlyPayment = () => {
      let initialValue = 0;
      let sum =
        donations &&
        donations
          .filter((donation) => donation.monthly)
          .reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.raisedAmount),
            initialValue
          );
      return sum;
    };
    return (
      <div>
        <Card className="cart-calculation">
          <Card.Body>
            <Row>
              <Col md={6}>
                <Card.Title> $ {dueToday()}</Card.Title>
                <p> Total due today</p>
              </Col>
              <Col md={6}>
                <Card.Title> $ {monthlyPayment()}</Card.Title>
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
