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
import React, { Fragment } from "react";

const priceRangeFilterData = {
  id: 0,
  name: "price range",
  sectionName: "priceRange",
};

const arrayOfDropdownFilters = [
  { id: 0, name: "amenities", sectionName: "amenities" },
  { id: 1, name: "room amenities", sectionName: "roomAmenities" },
  { id: 2, name: "neighbourhoods", sectionName: "neighbourhoods" },
  {
    id: 3,
    name: "handicap accessibility",
    sectionName: "handicapAccessibility",
  },
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
          key={priceRangeFilterData.id}
          onClick={() => handleClick(priceRangeFilterData.sectionName)}
        >
          <ListItemText>{priceRangeFilterData.name}</ListItemText>
          {openSections[priceRangeFilterData.sectionName] ? (
            <ArrowDropUpIcon />
          ) : (
            <ArrowDropDownIcon />
          )}
        </ListItemButton>
        <Collapse
          in={openSections[priceRangeFilterData.sectionName]}
          timeout="auto"
          unmountOnExit
        >
          <StyledSliderContainer>
            <StyledSlider
              getAriaLabel={() => priceRangeFilterData.name}
              value={priceRangeValue}
              onChange={() => {
                handleRangeChange;
              }}
              valueLabelDisplay="auto"
            />
          </StyledSliderContainer>
        </Collapse>

        {arrayOfDropdownFilters.map(({ id, name, sectionName }) => (
          <Fragment key={id}>
            <ListItemButton onClick={() => handleClick(sectionName)}>
              <ListItemText>{name}</ListItemText>
              {openSections.sectionName ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </ListItemButton>
            <Collapse
              in={openSections[sectionName]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {venuesAmenities[sectionName]?.map((filter) => (
                  <ListItemButton key={filter.id}>
                    <Checkbox />
                    <ListItemText>{filter.name}</ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </StyledFiltersContainer>
  );
}
