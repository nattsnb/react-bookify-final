import * as React from "react";
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
import { usePriceInPLNData } from "../../../shared/getPrice.js";
import { useDatePicker } from "./useDatePicker.js";
import { useContext } from "react";
import { ErrorContext } from "../../../App.jsx";
import { Container } from "@mui/system";

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

  const { isError } = useContext(ErrorContext);
  const priceInPLNData = usePriceInPLNData(
    venueDetails.venuesBasicData.pricePerNightInEURCent,
  );
  const fullPriceInPLN = daysBetween * priceInPLNData.priceInPLN;

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
        <Container>
          {isChecked ? (
            <DateCalendar
              showDaysOutsideCurrentMonth
              value={startDate}
              onChange={handleStartDateChange}
              calendars={1}
            />
          ) : whichCalendarIsActive === "start" ? (
            <DateCalendar
              showDaysOutsideCurrentMonth
              value={startDate}
              onChange={handleStartDateChange}
              calendars={1}
            />
          ) : (
            <DateCalendar
              showDaysOutsideCurrentMonth
              value={endDate}
              onChange={handleEndDateChange}
              calendars={1}
            />
          )}
        </Container>
      </StyledCalendarContainer>

      {isCalendarError && (
        <div>that&apos;s not a time machine, start over.</div>
      )}

      <StyledPriceContainer>
        <StyledPerDayContainer>
          <div>per day</div>
          <div>
            {priceInPLNData.isLoading ? (
              <CircularProgress />
            ) : isError ? (
              "error"
            ) : (
              `${priceInPLNData.priceInPLN} zł`
            )}
          </div>
        </StyledPerDayContainer>
        <Divider variant="light" />
        <StyledTotalContainer>
          <div>total</div>
          <div>
            {priceInPLNData.isLoading ? (
              <CircularProgress />
            ) : isError ? (
              "error"
            ) : (
              `${fullPriceInPLN} zł`
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
