import {
  StyledWideBodyLinkBarContainer,
  StyledWideBodyClickedContentContainer,
} from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Description } from "../Description/index.jsx";
import { Gallery } from "../Gallery/index.jsx";
import { Map } from "../Map/index.jsx";
import { useLinkBar } from "./useLinkBar.js";

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
};

export function WideBodyLinkBarAndContentContainer({ venueDetails }) {
  const {
    displayedContent,
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
  } = useLinkBar(DisplayedContentValue);

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
            <Map venueDetails={venueDetails} />
          ) : (
            <Gallery venueDetails={venueDetails} />
          )
        ) : (
          <Description venueDetails={venueDetails} />
        )}
      </StyledWideBodyClickedContentContainer>
    </>
  );
}
