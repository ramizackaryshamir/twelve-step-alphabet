import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import useStyles from './Map.js'

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w";

const Map = ({ longitude, latitude }) => {

  const [state, setState] = useState({
    lng: longitude.toFixed(5),
    lat: latitude.toFixed(5),
    zoom: 0,
  })
  

  const classes = useStyles()
  //useRefs to store references to the map  object and the map html element
  const mapContainerRef = useRef(null);
  
  //Initialize map when component mounts

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // This is where the coordinates render to Map, e.g.:
      // center: [40.60942, -74.27337]
      center: [state.lng, state.lat ],
      zoom: state.zoom
    })
  setState(
    map.getCenter(state.lng))
  
    setState(
      map.getCenter(state.lat))
    //Get location of user
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    
    //Add navigation control
    // map.addControl(new mapboxgl.NavigationControl(), "bottom-left")
    // map.on('move', () => {
    //   setState(map.getCenter().lng.toFixed(4));
    //   setState(map.getCenter().lat.toFixed(4));
    //   setState(map.getZoom().toFixed(2));
    // });

    //Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className={classes.mapContainer} ref={mapContainerRef}>
        <div className={classes.sidebar}>
          <div>
            Longitude: {longitude} | Latitude: {latitude} | Zoom: {state.zoom}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map;
