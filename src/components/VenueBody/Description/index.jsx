import { Divider } from "@mui/material";
import {
  StyledDescriptionContainer,
  StyledParagraphContainer,
} from "./Description.styled.js";

export function Description({ venueDetails }) {
  return (
    <StyledDescriptionContainer>
      <StyledParagraphContainer>
        {venueDetails.description}
      </StyledParagraphContainer>
      <Divider variant="light" />
      <div></div>
      <Divider variant="light" />
      <div></div>
    </StyledDescriptionContainer>
  );
}
