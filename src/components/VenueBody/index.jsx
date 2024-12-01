import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { CircularProgress, Link, useMediaQuery, useTheme } from "@mui/material";
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
import { ContactInfo } from "./ContactInfo/index.jsx";
import DatePicker from "./DatePicker/index.jsx";
import { NarrowBodyLinkBar } from "./LinkBarAndBody/NarowBodyLinkBar.jsx";
import { Description } from "./Description/index.jsx";
import { Gallery } from "./Gallery/index.jsx";
import MapWithAddress from "./MapWithAddress/index.jsx";
import { useLinkBar } from "./LinkBarAndBody/useLinkBar.js";

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
  contacts: "contacts",
};

export function Venue({ venueId }) {
  const { venueDetails, isLoading } = useVenue(venueId);
  const { venuesAmenities } = useLinkBar(DisplayedContentValue);
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
              <WideBodyLinkBarAndContentContainer
                venueDetails={venueDetails}
                DisplayedContentValue={DisplayedContentValue}
              />
            </StyledLeftColumnContainer>
            <StyledRightColumnContainer>
              <DatePicker venueDetails={venueDetails} />
              <ContactInfo venueDetails={venueDetails} />
            </StyledRightColumnContainer>
          </StyledWideBodyContainer>
        ) : (
          <>
            <DetailsAndImageContainer venueDetails={venueDetails} />
            <NarrowBodyLinkBar
              venueDetails={venueDetails}
              DisplayedContentValue={DisplayedContentValue}
            />
            <Description
              venueDetails={venueDetails}
              venuesAmenities={venuesAmenities}
              isLoading={isLoading}
            />
            <Gallery venueDetails={venueDetails} />
            <MapWithAddress
              locationData={venueDetails.venuesBasicData.location}
            />
            <ContactInfo venueDetails={venueDetails} />
          </>
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
