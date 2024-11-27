import { PageWidthContainer } from "../../../shared/styledComponents/pageWidthContainer.js";
import { Link } from "@mui/material";
import {
  StyledArrowBackIosIcon,
  StyledBackToResultsFlexDiv,
  StyledBackToResultsLinkContainer,
} from "./VenueBody.styled.js";

export function VenueBody({ venueId }) {
  return (
    <PageWidthContainer>
      <StyledBackToResultsLinkContainer>
        <Link href={"/results/"}>
          <StyledBackToResultsFlexDiv>
            <StyledArrowBackIosIcon /> <p>back to results</p>
          </StyledBackToResultsFlexDiv>
        </Link>
      </StyledBackToResultsLinkContainer>
      <p>Venue {venueId} Placeholder</p>
    </PageWidthContainer>
  );
}
