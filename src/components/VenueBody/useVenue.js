import { useEffect, useState } from "react";
import { api } from "../../shared/api.js";

export const useVenue = (venueId) => {
  const [venueDetails, setVenueDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getVenueDetails(venueId) {
      setIsLoading(true);
      try {
        const venueDetailsResponse = await api.getVenueDetails(venueId);
        setVenueDetails(venueDetailsResponse);
      } catch (error) {
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
