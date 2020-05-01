import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../project';

export default class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Container>
        <h1>You may aslo like these projects</h1>
        <Row>
          {projects &&
            projects.length > 0 &&
            projects.map((project, index) => {
              return (
                <Project
                  key={project._id}
                  project={project}
                  index={index}
                  donate={this.props.donate}
                />
              );
            })}
        </Row>
      </Container>
    );
  }
}
