import React, { Component, Fragment } from 'react';

import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>798 South Park Avenue, Jaipur, Raj</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd>
                  <a href="mailto:#">dkstudioin@gmail.com</a>
                </dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd>
                  <a href="tel:#">https://karosearch.com</a> <span>or</span>{' '}
                  <a href="tel:#">https://karosearch.com</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
