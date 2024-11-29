import { List, styled } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const StyledDescriptionContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(14)} ${({ theme }) => theme.spacing(18)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
        padding: 0 ${({ theme }) => theme.spacing(12)};
`;

export const StyledSectionContainer = styled("div")`
  font-size: 20px;
  line-height: 45px;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const StyledList = styled(List)`
  margin-top: ${({ theme }) => theme.spacing(8)};
  & .MuiTypography-root {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    & .MuiTypography-root {
      font-size: 14px;
    }
  }
`;

export const StyledDoneIcon = styled(DoneIcon)`
  font-size: 38px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 25px;
  }
`;
