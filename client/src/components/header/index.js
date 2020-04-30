import React, { Component, Fragment } from 'react';
import { Navbar, Form, Nav, FormControl } from 'react-bootstrap';
import { ChatSquare, Bell } from 'react-bootstrap-icons';

import './header.scss';

export default class Header extends Component {
  render() {
    const { count } = this.props;
    return (
      <Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#" id="brand-name">
            H
          </Navbar.Brand>
          <Nav.Link href="#" className="header-link">
            Discover
          </Nav.Link>
          <Nav.Link href="#" className="header-link">
            Simple Guide
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
          <ChatSquare className="chat" />
          <Bell className="chat" />

          <div className="user">
            <img src="assets/user.jpg" height="30" width="30" />
          </div>
          <div className="header-link your-list">Your List</div>
          <div className="count">{count}</div>
        </Navbar>
      </Fragment>
    );
  }
}
