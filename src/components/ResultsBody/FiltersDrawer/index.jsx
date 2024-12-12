import {
  Button,
  Checkbox,
  CircularProgress,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  StyledDrawerToolbar,
  StyledDrawerToolbarBackground,
  StyledFiltersContainer,
  StyledSlider,
  StyledSliderContainer,
} from "../Results.styled.js";
import { HiddenElement } from "../../../shared/styledComponents/hiddenElement.styled.js";
import { useFiltersDrawer } from "./useFiltersDrawer.js";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import React from "react";

const arrayOfFilters = [
  { id: 0, name: "price range" },
  { id: 1, name: "amenities" },
  { id: 2, name: "room amenities" },
  { id: 3, name: "neighbourhoods" },
  { id: 4, name: "handicap accessibility" },
];

export function FiltersDrawer() {
  const {
    openSections,
    handleClick,
    venuesAmenities,
    isLoading,
    priceRangeValue,
    handleRangeChange,
  } = useFiltersDrawer();

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  return (
    <StyledFiltersContainer>
      <StyledDrawerToolbarBackground>
        <StyledDrawerToolbar>
          <HiddenElement>
            <Typography>reset</Typography>
          </HiddenElement>

          <Typography variant="filterTitle">filters</Typography>

          <Button>
            <Typography variant="sortButton">reset</Typography>
          </Button>
        </StyledDrawerToolbar>
      </StyledDrawerToolbarBackground>

      <List>
        <ListItemButton
          key={arrayOfFilters[0].id}
          onClick={() => handleClick("priceRange")}
        >
          <ListItemText>{arrayOfFilters[0].name}</ListItemText>
          {openSections.priceRange ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </ListItemButton>
        <Collapse in={openSections.priceRange} timeout="auto" unmountOnExit>
          <StyledSliderContainer>
            <StyledSlider
              getAriaLabel={() => "Price range"}
              value={priceRangeValue}
              onChange={() => {
                handleRangeChange;
              }}
              valueLabelDisplay="auto"
            />
          </StyledSliderContainer>
        </Collapse>
        <ListItemButton
          key={arrayOfFilters[1].id}
          onClick={() => handleClick("amenities")}
        >
          <ListItemText>{arrayOfFilters[1].name}</ListItemText>
          {openSections.amenities ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ListItemButton>
        <Collapse in={openSections.amenities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {venuesAmenities.amenities.map((filter) => (
              <ListItemButton key={filter.id}>
                <Checkbox />
                <ListItemText>{filter.name}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton
          key={arrayOfFilters[2].id}
          onClick={() => handleClick("roomAmenities")}
        >
          <ListItemText>{arrayOfFilters[2].name}</ListItemText>
          {openSections.roomAmenities ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </ListItemButton>
        <Collapse in={openSections.roomAmenities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {venuesAmenities.roomAmenities.map((filter) => (
              <ListItemButton key={filter.id}>
                <Checkbox />
                <ListItemText>{filter.name}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton
          key={arrayOfFilters[3].id}
          onClick={() => handleClick("neighbourhoods")}
        >
          <ListItemText>{arrayOfFilters[3].name}</ListItemText>
          {openSections.neighbourhoods ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </ListItemButton>
        <Collapse in={openSections.neighbourhoods} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {venuesAmenities.neighbourhoods.map((filter) => (
              <ListItemButton key={filter.id}>
                <Checkbox />
                <ListItemText>{filter.name}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton
          key={arrayOfFilters[4].id}
          onClick={() => handleClick("handicapAccessibility")}
        >
          <ListItemText>{arrayOfFilters[4].name}</ListItemText>
          {openSections.handicapAccessibility ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </ListItemButton>
        <Collapse
          in={openSections.handicapAccessibility}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {venuesAmenities.handicapAccessibility.map((filter) => (
              <ListItemButton key={filter.id}>
                <Checkbox />
                <ListItemText>{filter.name}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </StyledFiltersContainer>
  );
}
