'use client';
import React, { useEffect } from 'react';

const LocationComponent = () => {
  // Coordinates for Bethlehem, PA 18015
  const latitude = 40.6250;
  const longitude = -75.3705;

  useEffect(() => {
    const loadMap = async () => {
      // Load the Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDP7iExAzuubkxzxnFb7KFEW8JVYTDPa80&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Define the initMap function globally
      window.initMap = () => {
        const bethlehem = { lat: latitude, lng: longitude };
        const map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: bethlehem,
        });
        new window.google.maps.Marker({
          position: bethlehem,
          map: map,
        });
      };
    };

    loadMap();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Location: Bethlehem, PA 18015</h2>
      {/* Google Map */}
      <div
        id="map"
        style={{ width: '100%', height: '400px', marginTop: '20px' }}
      />
    </div>
  );
};

export default LocationComponent;
