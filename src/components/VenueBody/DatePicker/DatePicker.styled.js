import { Button, ButtonGroup, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledStartsAtButton = styled(Button)`
  width: 111px;
  height: 48px;
  text-transform: lowercase;
  background-color: ${({ theme }) => theme.palette.background.offDefault};
  border: 1px solid #e5e5e5;
  border-radius: 20px 0 0 20px;

  color: ${({ whichcalendarisactive }) =>
    whichcalendarisactive === "start" ? `#747474` : `#9B9B9B`};
  font-weight: ${({ whichcalendarisactive }) =>
    whichcalendarisactive === "start" ? "600" : "300"};
  box-shadow: ${({ whichcalendarisactive }) =>
    whichcalendarisactive === "start"
      ? "inset -7px 9px 38px -32px color: ${({ theme }) => theme.palette.primary.font}"
      : "-7px 9px 38px -32px color: ${({ theme }) => theme.palette.primary.font}"};
`;

export const StyledEndsAtButton = styled(Button)`
  width: 111px;
  height: 48px;
  text-transform: lowercase;
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 1px solid #e5e5e5;
  border-radius: 0 20px 20px 0;
  color: ${({ whichcalendarisactive }) =>
    whichcalendarisactive === "end" ? `#747474` : `#9B9B9B`};
  font-weight: ${({ whichcalendarisactive }) =>
    whichcalendarisactive === "end" ? "600" : "300"};
  box-shadow: ${({ whichcalendarisactive }) =>
    whichcalendarisactive === "end"
      ? "inset -7px 9px 38px -32px color: ${({ theme }) => theme.palette.primary.font}"
      : "-7px 9px 38px -32px color: ${({ theme }) => theme.palette.primary.font}"};
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  box-shadow: none;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const StyledOneDayContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledOneDayTypography = styled(Typography)`
  font-size: 16px;
  color: #747474;
`;

export const StyledCalendarContainer = styled("div")`
  display: flex;
  justify-content: center;
  & .MuiDateCalendar-root {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 0;
  }

  & .MuiPickersDay-root {
    font-size: 16px;
    margin-left: ${({ theme }) => theme.spacing(2)};
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  & .MuiDayCalendar-weekDayLabel {
    font-size: 16px;
    margin-left: ${({ theme }) => theme.spacing(2)};
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  & .MuiDateRangeCalendar-root {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 100%;
    padding: 0;
  }
`;

export const StyledPriceContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(35)};
`;

export const StyledPerDayContainer = styled("div")`
  font-size: 20px;
  margin-top: ${({ theme }) => theme.spacing(11)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledTotalContainer = styled("div")`
  font-size: 25px;
  margin-top: ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledBookButton = styled(Button)`
  width: 138px;
  height: 40px;
`;

export const StyledBookButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
