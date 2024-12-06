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
import React, { createContext, useContext, useRef, useState } from "react";
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
import { Context } from "../../App.jsx";

const DisplayedContentValue = {
  description: "description",
  gallery: "gallery",
  map: "map",
  contacts: "contacts",
};

export const PictureContext = createContext([]);

export function Venue({ venueId }) {
  const {
    venueDetails,
    isLoading,
    descriptionRef,
    galleryRef,
    mapRef,
    contactsRef,
    handleScroll,
    displayedPictureNumber,
    setDisplayedPictureNumber,
  } = useVenue(venueId);
  const { venuesAmenities } = useLinkBar(DisplayedContentValue);
  const contextIsError = useContext(Context)[0];

  const theme = useTheme();
  const isViewportLargerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  if (contextIsError) {
    return <></>;
  }

  return (
    <PictureContext.Provider
      value={[displayedPictureNumber, setDisplayedPictureNumber]}
    >
      <PageWidthContainer>
        <StyledBodyContainer>
          <StyledBackToResultsLinkContainer>
            <Link href={"/"}>
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
    </PictureContext.Provider>
  );
}
