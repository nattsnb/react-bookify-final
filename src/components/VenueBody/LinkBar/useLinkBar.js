import { useEffect, useState } from "react";
import { api } from "../../../shared/api.js";

export function useLinkBar(DisplayedContentValue) {
  const [displayedContent, setDisplayedContent] = useState("description");
  const [venuesAmenities, setVenuesAmenities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getVenuesAmenities() {
      setIsLoading(true);
      try {
        const venuesAmenitiesResponse = await api.getVenuesAmenities();
        setVenuesAmenities(venuesAmenitiesResponse);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getVenuesAmenities();
  }, []);

  const handleDescriptionClick = () => {
    console.log("click")
    setDisplayedContent(DisplayedContentValue.description);
  };
  const handleGalleryClick = () => {
    setDisplayedContent(DisplayedContentValue.gallery);
  };
  const handleMapClick = () => {
    setDisplayedContent(DisplayedContentValue.map);
  };

  return {
    venuesAmenities,
    isLoading,
    displayedContent,
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
  };
}
