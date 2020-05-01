import React, { Component } from 'react';
import { Card, Image, Row, Col, Container, Button } from 'react-bootstrap';

import './donation.scss';

export default class Donation extends Component {
  handleOptionChange = (e) => {
    const { handleSelect, donation } = this.props;
    console.log('hsdg: ', e.target.name);
    const name = e.target.value;
    handleSelect(donation, name);
  };
  render() {
    const { donation, index, length } = this.props;
    const first = index === 0 ? 'first' : '';
    const last = index === length - 1 ? 'last' : '';
    return (
      <div>
        <Card className={`donation-card ${first} ${last}`}>
          <Card.Body>
            <Container>
              <Row>
                <Col md={2}>
                  <Image
                    src="assets/download.jpg"
                    fluid
                    style={{ borderRadius: 15 }}
                  />
                </Col>
                <Col md={8}>
                  <h6>{donation.project.title}</h6>
                  <p>{donation.project.type}</p>
                </Col>
                <Col md={2}>
                  <Button>Delete</Button>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <label className="container">
                    Monthly
                    <input
                      type="radio"
                      checked={donation.monthly}
                      value="monthly"
                      onChange={this.handleOptionChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Col>
                <Col md={4}>
                  <label className="container">
                    One-time
                    <input
                      type="radio"
                      checked={donation.one}
                      value="one"
                      onChange={this.handleOptionChange}
                    />
                    <span className="checkmark"></span>
                  </label>
                </Col>
                <Col md={{ span: 3, offset: 1 }}>
                  <div className="amount">$ {donation.raisedAmount}</div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
