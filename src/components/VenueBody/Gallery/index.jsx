import {
  StyledGalleryContainer,
  StyledImageContainer,
} from "./Gallery.styled.js";
import React from "react";

export function Gallery(venueDetails) {
  return (
    <StyledGalleryContainer>
      {venueDetails.venueDetails.venuesBasicData.images.map(
        (imageURL, index) => (
          <StyledImageContainer key={index} imageUrl={imageURL} />
        ),
      )}
    </StyledGalleryContainer>
  );
}
