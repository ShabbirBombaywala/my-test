import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';
import TotalDonation from '../total-donation';
import DonationList from '../donation-list';
import ProjectList from '../project-list';
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
  render() {
    console.log('projects:', this.state);
    const { donations } = this.state.user;
    return (
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
            <TotalDonation />
          </Col>
        </Row>
        <Row>
          <ProjectList projects={this.state.projects} />
        </Row>
      </Container>
    );
  }
}
