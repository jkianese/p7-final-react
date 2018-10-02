import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import './App.css';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div>
        {/*<h1 className="heading"> Our Favorite Disney World Locations! </h1>*/}
        <Map google={this.props.google} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ',
  Async: true,
  Defer: true 
})(App)



/*
class App extends Component {
  render() {
    return(
      <div id="map">
        <Map google={this.props.google} />
      </div>
    )
  }  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ',
  // Async: true,
  // Defer: true 
})(App)

// Original code
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/