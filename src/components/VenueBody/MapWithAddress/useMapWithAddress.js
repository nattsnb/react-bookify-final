import { useEffect, useState } from "react";
import { api } from "../../../shared/api.js";
import { useMap } from "react-leaflet";
import "leaflet-fullscreen";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";

export function useMapWithAddress(locationData) {
  const [coordinatesData, setCoordinatesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const address =
    `${locationData.streetNumber} ${locationData.streetName}, ${locationData.postalCode}, ${locationData.city}`.toLowerCase();

  useEffect(() => {
    async function getCoordinatesData(address) {
      setIsLoading(true);
      try {
        const coordinatesRes = await api.getCoordinatesData(address);
        setCoordinatesData(coordinatesRes);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getCoordinatesData(address);
  }, []);

  return {
    coordinatesData,
    isLoading,
    address,
    FullscreenControl,
  };
}

export const FullscreenControl = () => {
  const map = useMap();

  useEffect(() => {
    const fullscreenControl = L.control.fullscreen({
      position: "bottomright",
    });

    map.addControl(fullscreenControl);

    return () => {
      map.removeControl(fullscreenControl);
    };
  }, [map]);

  return null;
};