import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const center = {
  lat: -3.745,
  lng: -38.52
};

const mapLibraries = ['places'];
const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false
}

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)


function MapComponent({fullHeight=false}) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
        libraries: mapLibraries
    })

    const mapHeight = fullHeight ? '100vh' : '50vh';


    const containerStyle = {
      width: '100%',
      height: mapHeight,
    };
    

    if(!isLoaded) return null 
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={mapOptions}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  )
}

export default MapComponent