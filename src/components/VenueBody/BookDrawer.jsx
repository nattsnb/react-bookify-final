import React, { useState } from "react";
import {
  StyledBookDrawerWrapper,
  ToggleButton,
  ButtonWrapper,
  StyledDatePickerContainer,
  StyledDatePickerBodyWrapper,
} from "./Venue.styled.js";
import DatePicker from "./DatePicker/index.jsx";

export const BookDrawer = ({ venueDetails }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <StyledBookDrawerWrapper>
      <StyledDatePickerContainer open={isDrawerOpen}>
        <StyledDatePickerBodyWrapper>
          <DatePicker venueDetails={venueDetails} drawerOpen={isDrawerOpen} />
        </StyledDatePickerBodyWrapper>
      </StyledDatePickerContainer>
      <ButtonWrapper open={isDrawerOpen}>
        <ToggleButton onClick={toggleDrawer}>
          {isDrawerOpen ? "Back to venue" : "Book this venue"}
        </ToggleButton>
      </ButtonWrapper>
    </StyledBookDrawerWrapper>
  );
};
