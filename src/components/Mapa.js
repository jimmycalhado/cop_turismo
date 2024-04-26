import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import './css/Mapa.css';


const containerStyle = {
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    width: 'auto',
    height: '500px',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
  };

  const center = {
    lat: -1.421486936808526,
    lng:  -48.45676790559145
  };

function Mapa() {

  fetch('https://maps.googleapis.com/maps/api/js?key=YourKey_HERE&callback=console.debug&libraries=maps,marker&v=beta')

  //const map = new google.maps.Map(document.getElementById('map'), {
    //center: {center},
    //zoom: 16,
    //mapId: '52ea8d3188829f10'
  //});

  return (
    <LoadScript
    googleMapsApiKey = {"AIzaSyAyFkcsCMaRsQekYlK6uxUOEbX0Jyl1c9k"}
    libraries = {['places']}>
      <div className='mapa'>
      <GoogleMap
        className= 'mapa'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker position = {center} options={{
          label: {
            text: "Posição",
            className: "marca_map"
          }}}/>
      </GoogleMap>
      </div>
    </LoadScript>
  ) ; <></>
}


export default Mapa
