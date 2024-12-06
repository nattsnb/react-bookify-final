import {
  StyledGalleryContainer,
  StyledImageContainer,
} from "./Gallery.styled.js";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { StyledContactInfoTypogrphy } from "../ContactInfo/ContactInfo.styled.js";
import { useGallery } from "./useGallery.js";

export function Gallery({ venueDetails, galleryRef }) {
  const theme = useTheme();
  const isViewportSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));

  const handleOnClick = useGallery();

  return (
    <div ref={galleryRef}>
      {isViewportSmallerThanLg ? (
        <>
          <StyledContactInfoTypogrphy>Gallery</StyledContactInfoTypogrphy>
          <StyledGalleryContainer>
            {venueDetails.venuesBasicData.images.map((imageURL, index) => (
              <StyledImageContainer
                key={index}
                imageUrl={imageURL}
                onClick={() => handleOnClick(index)}
              />
            ))}
          </StyledGalleryContainer>
        </>
      ) : (
        <StyledGalleryContainer>
          {venueDetails.venuesBasicData.images.map((imageURL, index) => (
            <StyledImageContainer
              key={index}
              imageUrl={imageURL}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </StyledGalleryContainer>
      )}
    </div>
  );
}
