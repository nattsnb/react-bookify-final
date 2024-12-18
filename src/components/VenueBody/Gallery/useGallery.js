import { useContext } from "react";
import { PictureContext } from "../index.jsx";

export const useGallery = () => {
  const { displayedPictureNumber, setDisplayedPictureNumber } =
    useContext(PictureContext);

  const handleOnClick = (pictureIndex) => {
    setDisplayedPictureNumber(pictureIndex);
  };

  return handleOnClick;
};
