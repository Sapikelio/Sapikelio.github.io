import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

import { Button, Navbar, Nav, NavItem,Glyphicon } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/website/#">Sapikelio</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                        <NavItem href="/website/#">
                            &nbsp;Home
                        </NavItem>

                        <NavItem  href="/website/#/projects" >
                            &nbsp;Projects
                        </NavItem>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <div className="content">
            {this.props.children}
        </div>
      </div>
    );
  }
};
