import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import TotalDonation from '../total-donation';
import DonationList from '../donation-list';
import ProjectList from '../project-list';
import Header from '../header';
import { MONTHLY, ONE_TIME, DEFAULT_DONATION } from '../constants';
// import donations from '../../donation-list.json';
import { BASE_URL } from '../../config';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      loader: false,
      user: [],
    };
  }

  fetchProjects = async () => {
    try {
      this.setState({
        loader: true,
      });
      const resp = await Axios.get(`${BASE_URL}/projects`);

      resp &&
        resp.data &&
        this.setState({ projects: resp.data.projects, loader: false });
    } catch (error) {
      this.setState({
        loader: false,
      });
    }
  };
  fetchUser = async () => {
    try {
      this.setState({
        loader: true,
      });
      const resp = await Axios.get(`${BASE_URL}/user`);

      resp &&
        resp.data &&
        this.setState({ user: resp.data.user, loader: false });
    } catch (error) {
      this.setState({
        loader: false,
      });
    }
  };
  componentDidMount() {
    this.fetchProjects();
    this.fetchUser();
  }
  calculateDue = () => {};
  handleSelect = () => {};

  donate = async (project) => {
    const {
      user: { donations },
      user,
    } = this.state;

    try {
      this.setState({
        loader: true,
      });
      const newDonation = {
        monthly: MONTHLY,
        oneTime: ONE_TIME,
        owner: user._id,
        project_id: project._id,
        raisedAmount: DEFAULT_DONATION,
      };
      const resp = await Axios.post(
        `${BASE_URL}/user/${user._id}/donation`,
        newDonation
      );

      if (resp && resp.data) {
        this.fetchUser();
        this.setState({ loader: false });
      }
    } catch (error) {
      this.setState({
        loader: false,
      });
    }
  };
  render() {
    const {
      user: { donations },
      projects,
      user,
    } = this.state;
    console.log('user: ', this.state.user);
    return (
      <div>
        <Header count={donations && donations.length} />
        <Container className="main">
          <Row>
            <Col md={12}>
              <h1>Donation List</h1>
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <DonationList
                donations={donations}
                handleSelect={this.handleSelect}
              />
            </Col>
            <Col md={5}>
              <TotalDonation donations={donations} user={user} />
            </Col>
          </Row>
          <Row>
            <ProjectList donate={this.donate} projects={projects} />
          </Row>
        </Container>
      </div>
    );
  }
}
