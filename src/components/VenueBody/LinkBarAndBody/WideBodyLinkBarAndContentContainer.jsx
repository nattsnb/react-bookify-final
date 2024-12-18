import {
  StyledBodyLinkBarContainer,
  StyledWideBodyClickedContentContainer,
} from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React from "react";
import { Description } from "../Description/index.jsx";
import { Gallery } from "../Gallery/index.jsx";
import MapWithAddress from "../MapWithAddress/index.jsx";
import { useLinkBar } from "./useLinkBar.js";

export function WideBodyLinkBarAndContentContainer({
  venueDetails,
  DisplayedContentValue,
}) {
  const {
    venuesAmenities,
    isLoading,
    displayedContent,
    handleDescriptionClick,
    handleGalleryClick,
    handleMapClick,
  } = useLinkBar(DisplayedContentValue);
  return (
    <>
      <StyledBodyLinkBarContainer>
        <Button onClick={handleDescriptionClick}>description</Button>
        <Button onClick={handleGalleryClick}>gallery</Button>
        <Button onClick={handleMapClick}>map</Button>
      </StyledBodyLinkBarContainer>
      <StyledWideBodyClickedContentContainer>
        {displayedContent !== DisplayedContentValue.description ? (
          displayedContent !== DisplayedContentValue.gallery ? (
            <MapWithAddress
              locationData={venueDetails.venuesBasicData.location}
            />
          ) : (
            <Gallery venueDetails={venueDetails} />
          )
        ) : (
          <Description
            venueDetails={venueDetails}
            venuesAmenities={venuesAmenities}
            isLoading={isLoading}
          />
        )}
      </StyledWideBodyClickedContentContainer>
    </>
  );
}
