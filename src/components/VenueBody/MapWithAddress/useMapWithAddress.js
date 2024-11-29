import { useEffect, useState } from "react";
import { api } from "../../../shared/api.js";

export function useMapWithAddress(locationData) {
  const [coordinatesData, setCoordinatesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const address = `${locationData.streetNumber} ${locationData.streetName}, ${locationData.postalCode}, ${locationData.city}`;

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
  };
}
