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
import React, { useRef } from "react";
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
import { BookDrawer } from "./BookDrawer.jsx";

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
  contacts: "contacts",
};

export function Venue({ venueId }) {
  const descriptionRef = useRef(null);
  const galleryRef = useRef(null);
  const mapRef = useRef(null);
  const contactsRef = useRef(null);

  const { venueDetails, isLoading } = useVenue(venueId);
  const { venuesAmenities } = useLinkBar(DisplayedContentValue);
  const theme = useTheme();
  const isViewportLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  const handleScroll = (ref) => {
    if (ref?.current.offsetTop) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.warn("Ref is null or undefined:", ref);
    }
  };

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
              handleScroll={handleScroll}
              descriptionRef={descriptionRef}
              galleryRef={galleryRef}
              mapRef={mapRef}
              contactsRef={contactsRef}
            />

            <Description
              venueDetails={venueDetails}
              venuesAmenities={venuesAmenities}
              isLoading={isLoading}
              descriptionRef={descriptionRef}
            />
            <Gallery venueDetails={venueDetails} galleryRef={galleryRef} />
            <MapWithAddress
              locationData={venueDetails.venuesBasicData.location}
              mapRef={mapRef}
            />
            <ContactInfo
              venueDetails={venueDetails}
              contactsRef={contactsRef}
            />
            <BookDrawer venueDetails={venueDetails} />
          </>
        )}
      </StyledBodyContainer>
    </PageWidthContainer>
  );
}
