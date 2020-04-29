import React, { Component, Fragment } from 'react';
import { Card, Image, Row, Col, Container, Button } from 'react-bootstrap';

export default class Project extends Component {
  render() {
    const {
      imgSrc,
      location,
      donationBudget,
      endDate,
      raisedDonation,
      title,
      type,
    } = this.props.project;
    return (
      <Fragment>
        <Col md={4}>
          <Card style={{ width: '18rem' }}>
            <Image src={imgSrc} fluid style={{ borderRadius: 15 }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {type} {location}
              </Card.Text>
              <Card.Text>
                {`$ ${raisedDonation} raised of $ ${donationBudget}`}
              </Card.Text>
              <Button variant="success">Donate</Button>
            </Card.Body>
          </Card>
        </Col>
      </Fragment>
    );
  }
}
