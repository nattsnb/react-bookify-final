import { StyledBodyLinkBarContainer } from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useLinkBar } from "./useLinkBar.js";
import { useVenue } from "../useVenue.js";

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
