import { styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const StyledBackToResultsFlexDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 16px;
`;

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-left: ${({ theme }) => theme.spacing(3)};
`;

export const StyledBackToResultsLinkContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StyledWideBodyContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const StyledBodyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(21)} ${({ theme }) => theme.spacing(28)};
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
`;

export const StyledLeftColumnContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: aqua;
  max-width: 692px;
  width: 100%;
`;

export const StyledRightColumnContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: deeppink;
  max-width: 382px;
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing(12)};
`;

export const StyledDetailsAndImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 100%;
`;

export const StyledAddressAndRatingContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
