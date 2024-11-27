import { styled } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";

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
  margin-bottom: ${({ theme }) => theme.spacing(16)};
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
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
      @media (max-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
        padding: ${({ theme }) => theme.spacing(14)} ${({ theme }) => theme.spacing(18)};
          @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
            padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(10)};
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
      @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
        margin-left: ${({ theme }) => theme.spacing(6)};
`;

export const StyledDetailsAndImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledDetailsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledNameAndAddressContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledRatingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledImageContainer = styled("div")`
  display: flex;
`;

export const StyledVenueNameTypography = styled(Typography)`
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
    @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
      font-size: 35px;
      @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
        font-size: 30px;
          @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
            font-size: 20px;
    `;

export const StyledVenueAddressTypography = styled(Typography)`
  text-transform: capitalize;
  font-size: 25px;
      @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
        font-size: 20px;
          @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
            font-size: 14px;
`;

export const StyledVenueRatingTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.detail};
`;

export const StyledReviewsTypography = styled(Typography)`
  font-size: 14px;
  opacity: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 12px;
`;
