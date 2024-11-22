import {
  StyledBottomDecorationImageContainer,
  StyledBanner,
  StyledBannerContent,
  StyledHeaderTypography,
  StyledHeaderTypographyContainer,
} from "./Banner.styled.js";
import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./SearchBar/index.jsx";
import bottomDecorationImage from "../../images/bottomDecoration.svg";

export function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <StyledBanner>
        <StyledBannerContent>
          {matches ? (
            <>
              <StyledHeaderTypographyContainer>
                <StyledHeaderTypography>
                  Find your place and experience it together.
                </StyledHeaderTypography>
              </StyledHeaderTypographyContainer>
              <SearchBar />
            </>
          ) : (
            <>
              <StyledHeaderTypographyContainer>
                <StyledHeaderTypography>Find your place</StyledHeaderTypography>
                <StyledHeaderTypography>
                  and experience it together.
                </StyledHeaderTypography>
              </StyledHeaderTypographyContainer>
              <SearchBar />
              <StyledBottomDecorationImageContainer />
            </>
          )}
        </StyledBannerContent>
      </StyledBanner>
      <Divider variant="light"></Divider>
    </>
  );
}
