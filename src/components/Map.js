import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Map extends Component {

  componentDidMount() {
    this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 13;
      let lat = 28.38523;
      let lng = -81.563873;

      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom,
      })
      this.map = new maps.Map(node, mapConfig)
    }

  }
  render() {   
    return (
          <div role="application" className="map" ref="map">
            loading map...
          </div>
    )
  }
}

