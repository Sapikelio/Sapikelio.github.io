import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

import { Button, Navbar, Nav, NavItem,Glyphicon } from 'react-bootstrap';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/#">Sapikelio</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                        <NavItem href="/#">
                            &nbsp;Home
                        </NavItem>

                        <NavItem  href="/#/projects" >
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
