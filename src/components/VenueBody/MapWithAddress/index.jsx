import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMapContainer } from "./MapWithAddress.styled.js";
import { useMapWithAddress } from "./useMapWithAddress.js";

const MapWithAddress = ({ locationData }) => {
  const { coordinatesData, isLoading, address } =
    useMapWithAddress(locationData);
  console.log(coordinatesData);
  console.log(isLoading);
  console.log(address);
  return (
    <StyledMapContainer>
      ola
      {/*<MapContainer center={[lat, lng]} zoom={13}>*/}
      {/*  <TileLayer*/}
      {/*      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
      {/*      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
      {/*  />*/}
      {/*  <Marker position={[lat, lng]}>*/}
      {/*    <Popup>{address}</Popup>*/}
      {/*  </Marker>*/}
      {/*</MapContainer>*/}
    </StyledMapContainer>
  );
};

export default MapWithAddress;
