import React, { Component, Fragment } from 'react';
import { Card, Image, Row, Col, ProgressBar, Button } from 'react-bootstrap';

import './project.scss';
export default class Project extends Component {
  handleClick = () => {
    const { donate, project } = this.props;
    donate(project);
  };
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
    const progress = (raisedDonation / donationBudget) * 100;
    console.log(progress);
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
              <ProgressBar className="project-progress-bar" now={progress} />

              <Button
                variant="success"
                className="donate"
                onClick={this.handleClick}
              >
                Donate
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Fragment>
    );
  }
}
