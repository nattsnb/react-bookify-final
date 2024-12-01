import {
  StyledGalleryContainer,
  StyledImageContainer,
} from "./Gallery.styled.js";
import React from "react";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { StyledContactInfoTypogrphy } from "../ContactInfo/ContactInfo.styled.js";

export function Gallery(venueDetails) {
  const theme = useTheme();
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {isViewportSmallerThanLg ? (
        <>
          <StyledContactInfoTypogrphy>Gallery</StyledContactInfoTypogrphy>
          <StyledGalleryContainer>
            {venueDetails.venueDetails.venuesBasicData.images.map(
              (imageURL, index) => (
                <StyledImageContainer key={index} imageUrl={imageURL} />
              ),
            )}
          </StyledGalleryContainer>
        </>
      ) : (
        <StyledGalleryContainer>
          {venueDetails.venueDetails.venuesBasicData.images.map(
            (imageURL, index) => (
              <StyledImageContainer key={index} imageUrl={imageURL} />
            ),
          )}
        </StyledGalleryContainer>
      )}
    </>
  );
}
