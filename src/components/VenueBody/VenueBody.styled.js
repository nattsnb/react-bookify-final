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
  margin-bottom: ${({ theme }) => theme.spacing(4)};
      @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
        margin-bottom: ${({ theme }) => theme.spacing(1)};
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
  aspect-ratio: 2 / 1;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.backgroundurl})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
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
    @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
      & .MuiSvgIcon-root {
        font-size: 20px;
      }
`;

export const StyledReviewsTypography = styled(Typography)`
  font-size: 14px;
  opacity: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 12px;
`;

export const StyledIconContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(10)};
  padding-right: ${({ theme }) => theme.spacing(8)};

  & .MuiSvgIcon-root {
    font-size: 50px;
    color: ${({ theme }) => theme.palette.background.offDefault};
    opacity: 80%;
    text-shadow: 3px 3px 15px ${({ theme }) => theme.palette.secondary.dark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    & .MuiSvgIcon-root {
      font-size: 35px;
    }
  }
`;

export const StyledHeartDiv = styled("div")`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  opacity: 0.63;
  border-radius: 0 0 10px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(1)};
`;
