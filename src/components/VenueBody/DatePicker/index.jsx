import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { Checkbox, Divider } from "@mui/material";
import { StyledContactInfoTypogrphy } from "../ContactInfo/ContactInfo.styled.js";
import { useEffect, useState } from "react";
import {
  StyledEndsAtButton,
  StyledStartsAtButton,
  StyledButtonGroup,
  StyledOneDayContainer,
  StyledOneDayTypography,
  StyledCalendarContainer,
  StyledPerDayContainer,
  StyledTotalContainer,
  StyledPriceContainer,
  StyledBookButton,
  StyledBookButtonContainer,
} from "./DatePicker.styled.js";
import { DateCalendar } from "@mui/x-date-pickers";
import { getPriceInPLN } from "../../../shared/getPrice.js";
import { useDatePicker } from "./useDatePicker.js";

export default function DatePicker({ venueDetails }) {
  const {
    whichCalendarIsActive,
    startDate,
    endDate,
    isChecked,
    isCalendarError,
    daysBetween,
    handleStartsAtClick,
    handleEndsAtClick,
    handleCheckboxChange,
    handleStartDateChange,
    handleEndDateChange,
  } = useDatePicker();

  return (
    <>
      <StyledContactInfoTypogrphy>Book this venue</StyledContactInfoTypogrphy>
      <Divider variant="dark" />
      <StyledButtonGroup>
        <StyledStartsAtButton
          onClick={handleStartsAtClick}
          whichcalendarisactive={whichCalendarIsActive}
        >
          starts at
        </StyledStartsAtButton>
        <StyledEndsAtButton
          onClick={handleEndsAtClick}
          whichcalendarisactive={whichCalendarIsActive}
        >
          ends at
        </StyledEndsAtButton>
      </StyledButtonGroup>
      <StyledOneDayContainer>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          label={"justOneDay"}
        />
        <StyledOneDayTypography>just one day</StyledOneDayTypography>
      </StyledOneDayContainer>
      <StyledCalendarContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DateCalendar", "DateCalendar", "DateCalendar"]}
          >
            {isChecked ? (
              <DemoItem>
                <DateCalendar
                  showDaysOutsideCurrentMonth
                  value={startDate}
                  onChange={handleStartDateChange}
                  calendars={1}
                />
              </DemoItem>
            ) : (
              <>
                {whichCalendarIsActive === "start" ? (
                  <DemoItem>
                    <DateCalendar
                      showDaysOutsideCurrentMonth
                      value={startDate}
                      onChange={handleStartDateChange}
                      calendars={1}
                    />
                  </DemoItem>
                ) : (
                  <DemoItem>
                    <DateCalendar
                      showDaysOutsideCurrentMonth
                      value={endDate}
                      onChange={handleEndDateChange}
                      calendars={1}
                    />
                  </DemoItem>
                )}
              </>
            )}
          </DemoContainer>
        </LocalizationProvider>
      </StyledCalendarContainer>

      {isCalendarError && <div>that's not a time machine, start over.</div>}

      <StyledPriceContainer>
        <StyledPerDayContainer>
          <div>per day</div>
          <div>
            {getPriceInPLN(venueDetails.venuesBasicData.pricePerNightInEURCent)}{" "}
            zł
          </div>
        </StyledPerDayContainer>
        <Divider variant="light"></Divider>
        <StyledTotalContainer>
          <div>total</div>
          <div>
            {daysBetween *
              getPriceInPLN(
                venueDetails.venuesBasicData.pricePerNightInEURCent,
              )}{" "}
            zł
          </div>
        </StyledTotalContainer>
        <StyledBookButtonContainer>
          <StyledBookButton variant="contained">Book</StyledBookButton>
        </StyledBookButtonContainer>
      </StyledPriceContainer>
    </>
  );
}
