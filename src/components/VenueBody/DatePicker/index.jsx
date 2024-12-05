import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { Checkbox, CircularProgress, Divider } from "@mui/material";
import { StyledContactInfoTypogrphy } from "../ContactInfo/ContactInfo.styled.js";
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
import { usePriceInPLN } from "../../../shared/getPrice.js";
import { useDatePicker } from "./useDatePicker.js";
import { useContext } from "react";
import { Context } from "../../../App.jsx";

export default function DatePicker({ venueDetails, drawerOpen }) {
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

  const contextIsError = useContext(Context)[0];
  const priceInPLNData = usePriceInPLN(
    venueDetails.venuesBasicData.pricePerNightInEURCent,
  );
  const countedPriceInPLN = daysBetween * priceInPLNData.priceInPLN;

  return (
    <>
      {!drawerOpen && (
        <>
          <StyledContactInfoTypogrphy>
            Book this venue
          </StyledContactInfoTypogrphy>
          <Divider variant="dark" />
        </>
      )}

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
      </StyledCalendarContainer>

      {isCalendarError && <div>that's not a time machine, start over.</div>}

      <StyledPriceContainer>
        <StyledPerDayContainer>
          <div>per day</div>
          <div>
            {priceInPLNData.isLoading ? (
              <CircularProgress />
            ) : contextIsError ? (
              "error"
            ) : (
              `${priceInPLNData.priceInPLN} zł`
            )}
          </div>
        </StyledPerDayContainer>
        <Divider variant="light"></Divider>
        <StyledTotalContainer>
          <div>total</div>
          <div>
            {priceInPLNData.isLoading ? (
              <CircularProgress />
            ) : contextIsError ? (
              "error"
            ) : (
              `${countedPriceInPLN} zł`
            )}
          </div>
        </StyledTotalContainer>
        <StyledBookButtonContainer>
          <StyledBookButton variant="contained">Book</StyledBookButton>
        </StyledBookButtonContainer>
      </StyledPriceContainer>
    </>
  );
}
