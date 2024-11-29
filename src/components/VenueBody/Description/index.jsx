import {
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import {
  StyledDescriptionContainer,
  StyledDoneIcon,
  StyledList,
  StyledSectionContainer,
} from "./Description.styled.js";
import DoneIcon from "@mui/icons-material/Done";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import React from "react";

export function Description({ venueDetails, venuesAmenities, isLoading }) {
  let amenitiesToList = [];
  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  } else {
    const activeAmenities = venuesAmenities.amenities
      .filter((obj) =>
        venueDetails.activeFiltersAndOccasions.activeFilters.activeAmenities.includes(
          obj.id,
        ),
      )
      .map((obj) => obj.name);
    const roomAmenities = venuesAmenities.roomAmenities
      .filter((obj) =>
        venueDetails.activeFiltersAndOccasions.activeFilters.activeRoomAmenities.includes(
          obj.id,
        ),
      )
      .map((obj) => obj.name);
    const activeHandicapAccessibility = venuesAmenities.handicapAccessibility
      .filter((obj) =>
        venueDetails.activeFiltersAndOccasions.activeFilters.activeHandicapAccessibility.includes(
          obj.id,
        ),
      )
      .map((obj) => obj.name);
    const activeNeighbourhoods = venuesAmenities.neighbourhoods
      .filter((obj) =>
        venueDetails.activeFiltersAndOccasions.activeFilters.activeNeighbourhoods.includes(
          obj.id,
        ),
      )
      .map((obj) => obj.name);
    const formattedActiveNeighbourhoods = () => {
      const allButLast = activeNeighbourhoods
        .slice(0, -1)
        .map((item) => `${item}`)
        .join(", ");
      const lastItem = `${activeNeighbourhoods[activeNeighbourhoods.length - 1]}`;
      return `${allButLast} and ${lastItem} nearby`;
    };
    amenitiesToList = activeAmenities.concat(
      roomAmenities,
      activeHandicapAccessibility,
    );
    amenitiesToList.push(formattedActiveNeighbourhoods());
  }

  return (
    <StyledDescriptionContainer>
      <StyledSectionContainer>
        {venueDetails.description}
      </StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer>
        <StyledList>
          {amenitiesToList.map((amenity, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <StyledDoneIcon />
              </ListItemIcon>
              <ListItemText>{amenity}</ListItemText>
            </ListItem>
          ))}
        </StyledList>
      </StyledSectionContainer>
      <Divider variant="light" />
      <StyledSectionContainer></StyledSectionContainer>
    </StyledDescriptionContainer>
  );
}
