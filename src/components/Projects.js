import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';


export default class Projects extends Component {
  render() {
    return (
      <div className="Example">
        <Row className="App-header-section-2">
            <Col xsOffset={1} xs={10} md={6} mdOffset={3}>
                <h1 className="headerText">Projects</h1>
                <h1 className="headerSubtext">Here you'll find some of my projects from private or public repositories</h1>
            </Col>
        </Row>
      </div>
    );
  }
};