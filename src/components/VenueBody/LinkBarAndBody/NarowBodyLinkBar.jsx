import { StyledBodyLinkBarContainer } from "./LinkBar.styled.js";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useLinkBar } from "./useLinkBar.js";

export function NarrowBodyLinkBar({ DisplayedContentValue }) {
  const {
    handleNarrowDescriptionClick,
    handleNarrowGalleryClick,
    handleNarrowMapClick,
    handleNarrowContactsClick,
  } = useLinkBar(DisplayedContentValue);
  return (
    <StyledBodyLinkBarContainer>
      <Button onClick={handleNarrowDescriptionClick}>description</Button>
      <Button onClick={handleNarrowGalleryClick}>gallery</Button>
      <Button onClick={handleNarrowMapClick}>map</Button>
      <Button onClick={handleNarrowContactsClick}>contacts</Button>
    </StyledBodyLinkBarContainer>
  );
}
