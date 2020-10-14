import React, { useEffect, useRef } from "react"
import mapboxgl from 'mapbox-gl'
import './Map.css'

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w";

const Map = ({ longitude, latitude, name, address1, address2, city, state }) => {
  
  //useRefs to store references to the map  object and the map html element
  const mapContainerRef = useRef()

  //Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // This is where the coordinates render to Map, e.g.:
      // center: [40.60942, -74.27337]
      center: [longitude, latitude],
      zoom: 12,
    })

    //Get location of user
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )

    //create a Marker for meeting coordinates and render marker to map
    const renderData = (marker) => {
      new mapboxgl.Marker(marker)
        .setLngLat([longitude, latitude])
        //create a Popup with styling and set it to Marker
        .setPopup(
          new mapboxgl.Popup({
            offset: 25,
            className: "popup-box",
            maxWidth: 'none',
          }).setHTML(
            `<h3> ${name} <h5> ${address1} <br> ${address2} <br> ${city}, ${state}`
          )
        )
        .addTo(map)
    }

    renderData()

    //Clean up on unmount
    return () => map.remove()
  }, [])

  return (
      <div
        className='map-container'
        ref={mapContainerRef}
      ></div>
  )
}

export default Map;
