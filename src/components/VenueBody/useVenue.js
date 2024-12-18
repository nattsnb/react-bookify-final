import { useContext, useEffect, useRef, useState } from "react";
import { api } from "../../shared/api.js";
import { ErrorContext } from "../../App.jsx";

export const useVenue = (venueId) => {
  const descriptionRef = useRef(null);
  const galleryRef = useRef(null);
  const mapRef = useRef(null);
  const contactsRef = useRef(null);
  const [venueDetails, setVenueDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedPictureNumber, setDisplayedPictureNumber] = useState(0);
  const { isError, setIsError } = useContext(ErrorContext);

  const handleScroll = (ref) => {
    if (ref?.current.offsetTop) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.warn("Ref is null or undefined:", ref);
    }
  };

  useEffect(() => {
    async function getVenueDetails(venueId) {
      setIsLoading(true);
      try {
        const venueDetailsResponse = await api.getVenueDetails(venueId);
        setVenueDetails(venueDetailsResponse);
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }
    getVenueDetails(venueId);
  }, []);

  return {
    venueDetails,
    isLoading,
    descriptionRef,
    galleryRef,
    mapRef,
    contactsRef,
    handleScroll,
    displayedPictureNumber,
    setDisplayedPictureNumber,
  };
};
