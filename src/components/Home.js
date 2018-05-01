import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="App-header-section">
            <div className="profile-photo-wraper">
                <img src="https://media.licdn.com/dms/image/C4E03AQHibgyLAq9JYA/profile-displayphoto-shrink_200_200/0?e=1530284400&amp;v=beta&amp;t=ECaHrWjB6Sal1_-SarnNgzdZ-HaEhu8Hw7Y8BLnvaOE"
                    className="profile-photo" height="128" width="128"/>
            </div>
            <h1 className="headerText">Hello..!</h1>
            <h1 className="headerSubtext">My name is Carlos Castillo & i do some stuff in Java, React, Angular, etc.</h1>
        </div>
        
        <Row className="with-margin">
            <Col xs={12} md={4} mdOffset={3}>
                <h3 style={{"fontWeight": 700, "color":"#3a4145"}}>About me</h3>
                <p>
                    Carlos Castillo is passionate about programming, swimming, speaking, traveling, videogames, music and his dog Hiro. He works as a software engineer at IOTsens, using technologies such as Java, Spring Boot, JPA/Hibernate, MySQL, ElasticSearch, MQTT, REST Services, JUnit, Mockito, Selenium, Angular4, JQuery, NodeJs, Python, Leaflet, HighCharts... Previously, he worked as a developer at ActualMed and Computer Languages and Systems Department from Jaume I Univerity. He got his BS and Masters at Jaume I Univerity and UNED. For more info, check out his projects and social media.
                </p>
            </Col>
    
            <Col xs={12} md={2}>
                <h3 style={{"fontWeight": 700, "color":"#3a4145"}}>Contact</h3>
                    <a href="https://twitter.com/CharlieCasti" target="_blank" className="contact-link">
                        <i className="fa fa-fw fa-2x fa-twitter-square"></i>
                        <span className="h5 header-font">Twitter</span>
                    </a>
                    <br/>
                    <a href="https://www.linkedin.com/in/ccastillomelgarejo" target="_blank" className="contact-link">
                        <i className="fa fa-fw fa-2x fa-linkedin-square"></i>
                        <span className="h5 header-font">LinkedIn</span>
                    </a>  
                    <br/>
                    <a href="https://www.facebook.com/CCastillo22" target="_blank" className="contact-link">
                        <i className="fa fa-fw fa-2x fa-facebook-square"></i>
                        <span className="h5 header-font">Facebook</span>
                    </a>
                    <br/>
                    <a href="mailto:ccastillomelgarejo@gmail.com" target="_blank" className="contact-link">
                        <i className="fa fa-fw fa-2x fa-envelope-square"></i>
                        <span className="h5 header-font">Mail</span>
                    </a>
            </Col>
        
        </Row>
      </div>
    );
  }
};