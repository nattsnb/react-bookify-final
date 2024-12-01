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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <StyledBookDrawerWrapper>
      <StyledDatePickerContainer open={drawerOpen}>
        <StyledDatePickerBodyWrapper>
          <DatePicker venueDetails={venueDetails} drawerOpen={drawerOpen} />
        </StyledDatePickerBodyWrapper>
      </StyledDatePickerContainer>
      <ButtonWrapper open={drawerOpen}>
        <ToggleButton onClick={toggleDrawer}>
          {drawerOpen ? "Back to venue" : "Book this venue"}
        </ToggleButton>
      </ButtonWrapper>
    </StyledBookDrawerWrapper>
  );
};
