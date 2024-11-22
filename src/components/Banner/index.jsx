import {
  StyledBanner,
  StyledBannerContent,
  StyledHeaderTypography,
  StyledHeaderTypographyContainer,
} from "./Banner.styled.js";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { VerticalContainer } from "../../shared/styledComponents/verticalContainer.styled.js";
import { SearchBar } from "./SearchBar/index.jsx";

export function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <StyledBanner>
        <StyledBannerContent>
          {matches ? (
            <StyledHeaderTypographyContainer>
              <StyledHeaderTypography>
                Find your place and experience it together.
              </StyledHeaderTypography>
            </StyledHeaderTypographyContainer>
          ) : (
            <StyledHeaderTypographyContainer>
              <StyledHeaderTypography>Find your place</StyledHeaderTypography>
              <StyledHeaderTypography>
                and experience it together.
              </StyledHeaderTypography>
            </StyledHeaderTypographyContainer>
          )}
          <VerticalContainer>
            <SearchBar />
          </VerticalContainer>
        </StyledBannerContent>
      </StyledBanner>
      <Divider variant="light"></Divider>
    </>
  );
}
