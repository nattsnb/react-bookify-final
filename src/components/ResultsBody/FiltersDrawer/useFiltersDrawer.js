import { useLinkBar } from "../../VenueBody/LinkBarAndBody/useLinkBar.js";
import { useEffect, useState } from "react";
import { api } from "../../../shared/api.js";

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
  contacts: "contacts",
};

export const useFiltersDrawer = () => {
  const [openSections, setOpenSections] = useState({
    priceRange: false,
    amenities: false,
    roomAmenities: false,
    handicapAccessibility: false,
    neighbourhoods: false,
  });
  const [venuesAmenities, setVenuesAmenities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (section) => {
    setOpenSections((previousState) => ({
      [section]: !previousState[section],
    }));
  };

  useEffect(() => {
    async function getVenuesAmenities() {
      setIsLoading(true);
      try {
        const venuesAmenitiesResponse = await api.getVenuesAmenities();
        setVenuesAmenities(venuesAmenitiesResponse);
      } catch (error) {
        setContextIsError(true);
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getVenuesAmenities();
  }, []);

  return { openSections, handleClick, venuesAmenities, isLoading };
};
