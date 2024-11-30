import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMapContainer } from "./MapWithAddress.styled.js";
import { useMapWithAddress } from "./useMapWithAddress.js";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import { CircularProgress } from "@mui/material";
import "leaflet-fullscreen";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";

const MapWithAddress = ({ locationData }) => {
  const { coordinatesData, isLoading, address, FullscreenControl } =
    useMapWithAddress(locationData);
  let lat = null;
  let lng = null;

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  } else {
    lat = coordinatesData.results[0].geometry.lat;
    lng = coordinatesData.results[0].geometry.lng;
  }

  return (
    <StyledMapContainer>
      <MapContainer center={[lat, lng]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}>
          <Popup>{address}</Popup>
        </Marker>
        <FullscreenControl />
      </MapContainer>
    </StyledMapContainer>
  );
};

export default MapWithAddress;