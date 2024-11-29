import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import {
  CircularProgress,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  StyledArrowBackIosIcon,
  StyledBackToResultsFlexDiv,
  StyledBackToResultsLinkContainer,
  StyledBodyContainer,
  StyledLeftColumnContainer,
  StyledRightColumnContainer,
  StyledWideBodyContainer,
} from "./Venue.styled.js";
import { DetailsAndImageContainer } from "./DetailsAndImageContainer/index.jsx";
import React from "react";
import { useVenue } from "./useVenue.js";
import { WideBodyLinkBarAndContentContainer } from "./LinkBarAndBody/WideBodyLinkBarAndContentContainer.jsx";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";

export function Venue({ venueId }) {
  const { venueDetails, isLoading } = useVenue(venueId);
  const theme = useTheme();
  const isViewportLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

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
        {isViewportLargerThanLg ? (
          <StyledWideBodyContainer>
            <StyledLeftColumnContainer>
              <DetailsAndImageContainer venueDetails={venueDetails} />
              <WideBodyLinkBarAndContentContainer venueDetails={venueDetails} />
            </StyledLeftColumnContainer>
            <StyledRightColumnContainer>
              calendar placeholder
            </StyledRightColumnContainer>
          </StyledWideBodyContainer>
        ) : (
          <DetailsAndImageContainer venueDetails={venueDetails} />
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
