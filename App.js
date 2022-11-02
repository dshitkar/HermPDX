import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import './App.css'
import '@tomtom-international/web-sdk-maps/dist/maps.css'

const App = () => {
  const mapElement = useRef()
  const [map, setMap] = useState({})
  const [longitude, setLongitude] = useState(-122.682122)
  const [latitude, setLatitude] = useState(45.512038)

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    }
    const destinations = []

    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,

      },
      center: [longitude, latitude],
      zoom: 14,
    })
    setMap(map)

    const addMarker = () => {
      const popupOffset = {
        bottom: [0, -25]
      }
      const popup = new tt.Popup({ offset: popupOffset }).setHTML('You are here!')
      const element = document.createElement('div')
      element.className = 'marker'

      const marker = new tt.Marker({
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map)
      marker.setPopup(popup).togglePopup()

    }
    addMarker()        

    return () => map.remove()
  }, [longitude, latitude])

  return (
    <>
      {map && (
        <div className="app">
          <div ref={mapElement} className="map" />
          <div className="search-bar">
            <h1>Where are you?</h1>
            <input
              type="text"
              id="longitude"
              className="longitude"
              placeholder="Put in Longitude"
              onChange={(e) => {
                setLongitude(e.target.value)
              }}
            />
            <input
              type="text"
              id="latitude"
              className="latitude"
              placeholder="Put in latitude"
              onChange={(e) => {
                setLatitude(e.target.value)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App