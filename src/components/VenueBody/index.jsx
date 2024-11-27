import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { Link, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledArrowBackIosIcon,
  StyledBackToResultsFlexDiv,
  StyledBackToResultsLinkContainer,
  StyledBodyContainer,
  StyledLeftColumnContainer,
  StyledRightColumnContainer,
  StyledWideBodyContainer,
} from "./VenueBody.styled.js";
import { DetailsAndImageContainer } from "./DetailsAndImageContainer.jsx";

export function VenueBody({ venueId }) {
  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <PageWidthContainer>
      <StyledBodyContainer>
        <StyledBackToResultsLinkContainer>
          <Link href={"/results/"}>
            <StyledBackToResultsFlexDiv>
              <StyledArrowBackIosIcon /> <p>back to results</p>
            </StyledBackToResultsFlexDiv>
          </Link>
        </StyledBackToResultsLinkContainer>
        {isViewportLargerThanMd ? (
          <StyledWideBodyContainer>
            <StyledLeftColumnContainer>
              <DetailsAndImageContainer />
            </StyledLeftColumnContainer>
            <StyledRightColumnContainer>
              calendar placeholder
            </StyledRightColumnContainer>
          </StyledWideBodyContainer>
        ) : (
          <DetailsAndImageContainer />
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
