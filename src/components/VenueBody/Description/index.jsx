import {
  CircularProgress,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  StyledDescriptionContainer,
  StyledDoneIcon,
  StyledSleepingDetailsIcon,
  StyledAmenitiesList,
  StyledSectionContainer,
  StyledEntryContainer,
  StyledIconContainer,
  StyledTextContainer,
  StyledSleepingDetailsContainer,
} from "./Description.styled.js";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import React, {useContext} from "react";
import { produceAmenitiesToList } from "./produceAmenitiesToList.js";
import { produceSleepingDetailsToList } from "./produceSleepingDetailsToList.js";
import {Context} from "../../../App.jsx";

export function Description({
  venueDetails,
  venuesAmenities,
  isLoading,
  descriptionRef,
}) {

  const contextIsError = useContext(Context)[0];

    let amenitiesToList = [];
    let sleepingDetailsToList = [];

    if (isLoading) {
      return (
          <VerticalContainer>
              <CircularProgress/>
          </VerticalContainer>
      )
    }

    if (contextIsError) {
      return <></>;
    }

    amenitiesToList = produceAmenitiesToList(venueDetails, venuesAmenities);
    sleepingDetailsToList = produceSleepingDetailsToList(venueDetails);



  return (
    <StyledDescriptionContainer ref={descriptionRef}>
      <StyledSectionContainer>
        {venueDetails.description}
      </StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer>
        <StyledAmenitiesList>
          {amenitiesToList.map((amenity, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <StyledDoneIcon />
              </ListItemIcon>
              <ListItemText>{amenity}</ListItemText>
            </ListItem>
          ))}
        </StyledAmenitiesList>
      </StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer>
        <StyledSleepingDetailsContainer>
          {sleepingDetailsToList.map(({ id, Icon, string }) => (
            <StyledEntryContainer key={id}>
              <StyledIconContainer>
                <StyledSleepingDetailsIcon>
                  <Icon />
                </StyledSleepingDetailsIcon>
              </StyledIconContainer>
              <StyledTextContainer>{string}</StyledTextContainer>
            </StyledEntryContainer>
          ))}
        </StyledSleepingDetailsContainer>
      </StyledSectionContainer>
    </StyledDescriptionContainer>
  );
}
