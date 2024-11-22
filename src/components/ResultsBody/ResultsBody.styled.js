import { styled, TextField, Toolbar } from "@mui/material";
import toolbarBackgroundImage from "../../images/toolbar.svg";

export const StyledWideBodyContentContainer = styled("div")`
  padding-top: ${({ theme }) => theme.spacing(31)};
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(30)};
  padding-right: ${({ theme }) => theme.spacing(8)};
  @media (max-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
    padding-left: ${({ theme }) => theme.spacing(25)};
    @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
      padding-left: ${({ theme }) => theme.spacing(20)};
`;

export const StyledDrawerToolbar = styled(Toolbar)`
  background-image: url(${toolbarBackgroundImage});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 282px;
  width: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: ${({ theme }) => theme.spacing(18)};
  box-shadow: 0 0 6px ${({ theme }) => theme.palette.secondary.light};
`;

export const StyledResultsBodyElementsWrapper = styled("div")`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing(18)};
`;

export const StyledResultsToolbarDiv = styled("div")`
  height: 35px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledResultsNumberTextFiled = styled(TextField)`
  width: auto;

  & .MuiInputBase-input {
    color: var(--primary-main);
    font-weight: 600;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(3)};
    margin: 0;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-radius: 0;
    }
  }
  & .MuiSelect-icon {
    display: none;
  }
`;

export const StyledDisplayNumberWrapper = styled("div")`
  margin-right: ${({ theme }) => theme.spacing(3)};
  margin-left: ${({ theme }) => theme.spacing(3)};
`;

export const StyledFiltersContainer = styled("div")`
  box-shadow: 0 0 6px ${({ theme }) => theme.palette.secondary.light};
  width: 283px;
`;

export const StyledLimitSettingsContainer = styled("div")`
  display: flex;
`;

export const StyleThinBodyContentContainer = styled("div")`
  padding-top: ${({ theme }) => theme.spacing(21)};
`;
