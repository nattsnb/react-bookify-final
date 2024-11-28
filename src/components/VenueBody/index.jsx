import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledArrowBackIosIcon,
  StyledBackToResultsFlexDiv,
  StyledBackToResultsLinkContainer,
  StyledBodyContainer,
  StyledLeftColumnContainer,
  StyledRightColumnContainer,
  StyledWideBodyContainer,
} from "./VenueBody.styled.js";
import { DetailsAndImageContainer } from "./DetailsAndImageContainer/index.jsx";
import React from "react";
import { useVenueBody } from "./useVenueBody.js";
import { WideBodyLinkBarAndContentContainer } from "./LinkBar/WideBodyLinkBarAndContentContainer.jsx";
import { StyledWideBodyClickedContentContainer } from "./LinkBar/LinkBar.styled.js";

export function VenueBody({ venueId }) {
  const { venueDetails, isLoading } = useVenueBody(venueId);
  const theme = useTheme();
  const isViewportLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  if (isLoading) {
    return <Typography>Loading...</Typography>;
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
              <WideBodyLinkBarAndContentContainer />
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
