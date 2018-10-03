import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import './App.css';
import Map from './components/Map';

class App extends Component {
  render() {
    if (!this.props.loaded) { // May not need this
      return <div>Loading...</div>
    }
    return (
      <div>
        {/*<h1 className="heading"> Pittsburgh, PA </h1>*/}
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