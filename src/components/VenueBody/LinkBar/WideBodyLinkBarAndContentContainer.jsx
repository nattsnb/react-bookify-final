import {
  StyledWideBodyLinkBarContainer,
  StyledWideBodyClickedContentContainer,
} from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Description } from "../Description/index.jsx";
import { Gallery } from "../Gallery/index.jsx";
import { Map } from "../Map/index.jsx";

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
};

export function WideBodyLinkBarAndContentContainer() {
  const [displayedContent, setDisplayedContent] = useState("description");

  const handleDescriptionClick = () => {
    setDisplayedContent(DisplayedContentValue.description);
  };
  const handleGalleryClick = () => {
    setDisplayedContent(DisplayedContentValue.gallery);
  };
  const handleMapClick = () => {
    setDisplayedContent(DisplayedContentValue.map);
  };

  return (
    <>
      <StyledWideBodyLinkBarContainer>
        <Button onClick={handleDescriptionClick}>description</Button>
        <Button onClick={handleGalleryClick}>gallery</Button>
        <Button onClick={handleMapClick}>map</Button>
      </StyledWideBodyLinkBarContainer>
      <StyledWideBodyClickedContentContainer>
        {displayedContent !== DisplayedContentValue.description ? (
          displayedContent !== DisplayedContentValue.gallery ? (
            <Map />
          ) : (
            <Gallery />
          )
        ) : (
          <Description />
        )}
      </StyledWideBodyClickedContentContainer>
    </>
  );
}
