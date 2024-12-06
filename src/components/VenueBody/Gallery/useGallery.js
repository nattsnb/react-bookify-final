import { useContext } from "react";
import { PictureContext } from "../index.jsx";

export const useGallery = () => {
  const contextSetDisplayedPictureNumber = useContext(PictureContext)[1];

  const handleOnClick = (pictureIndex) => {
    contextSetDisplayedPictureNumber(pictureIndex);
  };

  return handleOnClick;
};
