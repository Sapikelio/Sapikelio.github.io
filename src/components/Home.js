import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
            <div className="App-header-section">
        <div className="profile-photo-wraper">
        <img src="https://media.licdn.com/dms/image/C4E03AQHibgyLAq9JYA/profile-displayphoto-shrink_200_200/0?e=1530284400&amp;v=beta&amp;t=ECaHrWjB6Sal1_-SarnNgzdZ-HaEhu8Hw7Y8BLnvaOE"
        className="profile-photo" height="200" width="200"/>
        </div>
                <h1 className="headerText">Hello..!</h1>
            <h1 className="headerSubtext">My name is Carlos Castillo & i do some stuff in Java, React, Angular, etc.</h1>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
      </div>
    );
  }
};