import { Divider } from "@mui/material";
import {
  StyledDescriptionContainer,
  StyledSectionContainer,
} from "./Description.styled.js";

export function Description({ venueDetails }) {
  return (
    <StyledDescriptionContainer>
      <StyledSectionContainer>
        {venueDetails.description}
      </StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer></StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer></StyledSectionContainer>
    </StyledDescriptionContainer>
  );
}
