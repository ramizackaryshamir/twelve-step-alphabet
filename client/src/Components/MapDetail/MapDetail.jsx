import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import useStyles from './MapDetail.js'

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w";

export default function MapDetail() {
  const classes = useStyles()
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(2);

  //Initialize map when component mounts

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
  
    //Add navigation control
    map.addControl(new mapboxgl.NavigationControl(), "bottom-left")

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    //Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className={classes.mapContainer} ref={mapContainerRef}>
        <div className={classes.sidebar}>
          <div>
            Longitude: {lng} | Latitude {lat} | Zoom: {zoom}
          </div>
        </div>
        
      </div>
    </div>
  )

}


