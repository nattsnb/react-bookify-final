import { styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const StyledBackToResultsFlexDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  font-size: 16px;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const StyledBackToResultsLinkContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
