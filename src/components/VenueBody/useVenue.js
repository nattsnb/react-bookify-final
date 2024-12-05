import { useContext, useEffect, useState } from "react";
import { api } from "../../shared/api.js";
import { Context } from "../../App.jsx";

export const useVenue = (venueId) => {
  const [venueDetails, setVenueDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const setContextIsError = useContext(Context)[1];
  const contextIsError = useContext(Context)[0];

  useEffect(() => {
    async function getVenueDetails(venueId) {
      setIsLoading(true);
      try {
        const venueDetailsResponse = await api.getVenueDetails(venueId);
        setVenueDetails(venueDetailsResponse);
      } catch (error) {
        setContextIsError(true);
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getVenueDetails(venueId);
  }, []);

  return {
    venueDetails,
    isLoading,
  };
};
