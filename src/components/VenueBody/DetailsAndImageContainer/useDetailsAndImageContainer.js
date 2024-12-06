import { useContext } from "react";
import { PictureContext } from "../index.jsx";

export const useDetailsAndImageContainer = (venue) => {
  const contextSetDisplayedPictureNumber = useContext(PictureContext)[1];
  const contextDisplayedPictureNumber = useContext(PictureContext)[0];
  const handleClickForward = () => {
    if (contextDisplayedPictureNumber === venue.images.length - 1) {
      contextSetDisplayedPictureNumber(0);
    } else {
      contextSetDisplayedPictureNumber(contextDisplayedPictureNumber + 1);
    }
  };

  const handleClickBack = () => {
    if (contextSetDisplayedPictureNumber === 0) {
      contextSetDisplayedPictureNumber(venue.images.length - 1);
    } else {
      contextSetDisplayedPictureNumber(contextDisplayedPictureNumber - 1);
    }
  };

  return {
    handleClickForward,
    handleClickBack,
  };
};
