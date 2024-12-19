import { StyledBodyLinkBarContainer } from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React from "react";

export function NarrowBodyLinkBar({
  handleScroll,
  descriptionRef,
  galleryRef,
  mapRef,
  contactsRef,
}) {
  return (
    <StyledBodyLinkBarContainer>
      <Button onClick={() => handleScroll(descriptionRef)}>description</Button>
      <Button onClick={() => handleScroll(galleryRef)}>gallery</Button>
      <Button onClick={() => handleScroll(mapRef)}>map</Button>
      <Button onClick={() => handleScroll(contactsRef)}>contacts</Button>
    </StyledBodyLinkBarContainer>
  );
}
