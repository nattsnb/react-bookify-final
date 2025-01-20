import { useContext } from "react";
import { PictureContext } from "../index.jsx";

export const useDetailsAndImageContainer = (venue) => {
  const { displayedPictureNumber, setDisplayedPictureNumber } =
    useContext(PictureContext);
  const handleClickForward = () => {
    if (displayedPictureNumber === venue.images.length - 1) {
      setDisplayedPictureNumber(0);
    } else {
      setDisplayedPictureNumber(displayedPictureNumber + 1);
    }
  };

  const handleClickBack = () => {
    if (setDisplayedPictureNumber === 0) {
      setDisplayedPictureNumber(venue.images.length - 1);
    } else {
      setDisplayedPictureNumber(displayedPictureNumber - 1);
    }
  };

  return {
    handleClickForward,
    handleClickBack,
  };
};
