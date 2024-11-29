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
import React from "react";
import { produceAmenitiesToList } from "./produceAmenitiesToList.js";
import { produceSleepingDetailsToList } from "./produceSleepingDetailsToList.js";

export function Description({ venueDetails, venuesAmenities, isLoading }) {
  let amenitiesToList = [];
  let sleepingDetailsToList = [];
  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  } else {
    amenitiesToList = produceAmenitiesToList(venueDetails, venuesAmenities);
    sleepingDetailsToList = produceSleepingDetailsToList(venueDetails);
  }

  return (
    <StyledDescriptionContainer>
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
