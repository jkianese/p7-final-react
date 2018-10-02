import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Map extends Component {
  
  componentDidMount() {
    this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props
      const maps = google.maps

      const mapRef = this.refs.map
      const node = ReactDOM.findDOMNode(mapRef)

      const mapConfig = Object.assign({}, {
        center: {lat: 28.38523, lng: -81.563873},
        zoom: 13,
        mapTypeId: 'roadmap'
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

