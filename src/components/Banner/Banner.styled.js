import { styled } from "@mui/material";
import topDecorationImage from "../../images/topDecoration.svg";
import bottomDecorationImage from "../../images/bottomDecoration.svg";
import backgroundImage from "../../images/background.svg";
import Typography from "@mui/material/Typography";

export const StyledInputContainer = styled("div")`
  max-width: 220px;
  min-width: 120px;
  background-color: aqua;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

export const StyledSearchBarContainer = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
`;

export const StyledBannerContent = styled("div")`
  width: 100%;
`;

export const StyledBanner = styled("div")`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 524px;
  background-image: url(${topDecorationImage}), url(${bottomDecorationImage}),
    url(${backgroundImage});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    top left,
    bottom left,
    center;
`;

export const StyledHeaderTypography = styled(Typography)`
  font-size: 40px;
  font-weight: 600;
  text-align: right;
  margin-right: ${({ theme }) => theme.spacing(28)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
    font-size: 36px;
    margin-right: ${({ theme }) => theme.spacing(16)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    margin-right: ${({ theme }) => theme.spacing(12)};
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-left: ${({ theme }) => theme.spacing(8)};
    margin-right: ${({ theme }) => theme.spacing(0)};
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    margin-left: ${({ theme }) => theme.spacing(4)};
    font-size: 25px;
  }
`;

export const StyledHeaderTypographyContainer = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(45)};
`;
