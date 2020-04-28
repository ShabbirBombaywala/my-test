import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Donation from '../donation';

export default class DonationList extends Component {
  render() {
    const { donations, handleSelect } = this.props;
    return (
      <Fragment>
        {donations &&
          donations.length > 0 &&
          donations.map((donation, index, donations) => {
            return (
              <Donation
                key={donation.id}
                donation={donation}
                index={index}
                length={donations.length}
                handleSelect={handleSelect}
              />
            );
          })}
      </Fragment>
    );
  }
}
