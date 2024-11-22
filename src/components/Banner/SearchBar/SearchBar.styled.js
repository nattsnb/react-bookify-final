import { styled, TextField } from "@mui/material";

export const StyledSearchBarTextField = styled(TextField)`
  max-width: 220px;
  max-height: 48px;
  padding: 0;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 15px;
  font-size: 1.2vw;
  border: none;
  margin: 30px;
  background-color: ${({ theme }) => theme.palette.background.offDefault};

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  &.MuiFormControl-root {
    margin: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    &.MuiFormControl-root {
      margin: ${({ theme }) => theme.spacing(2)}
        ${({ theme }) => theme.spacing(1)};
      padding: 0;
    }
    .MuiInputBase-root {
      padding: 0;
    }
    .MuiInputAdornment-root {
      margin: 0;
    }
  }
`;

export const StyledInputsContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(19)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const StyledCollapseTypographyContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(2)};

  .MuiButton-root {
    border: none;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
    text-transform: none;
  }
`;

export const StyledSearchBarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
