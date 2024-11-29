import { Icon, List, ListItem, styled } from "@mui/material";
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

export const StyledAmenitiesList = styled(List)`
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
  color: ${({ theme }) => theme.palette.primary.font};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 25px;
  }
`;

export const StyledSleepingDetailsIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.primary.font};
  & .MuiSvgIcon-root {
    font-size: 38px;
  }
  height: fit-content;
  width: fit-content;

  ${({ theme }) => theme.breakpoints.down("md")} {
    & .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
`;

export const StyledSleepingDetailsContainer = styled("div")`
  margin-top: ${({ theme }) => theme.spacing(8)};
  display: flex;
  flex-direction: column;
`;

export const StyledEntryContainer = styled("div")`
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  background-color: deeppink;
  align-items: center;
`;

export const StyledIconContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing(8)};
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const StyledTextContainer = styled("div")`
  line-height: 120%;
  font-size: 20px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 14px;
  }
`;
