import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { Banner } from "../../components/Banner/index.jsx";
import { Button, Divider, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "../../components/Banner/SearchBar/index.jsx";
import {
  FiltersButton,
  SortButton,
  StyledDrawerButtonsContainer,
  StyledNoBannerFrame,
} from "../../components/Banner/Banner.styled.js";
import { ResultsBody } from "../../components/ResultsBody/index.jsx";

export function Results() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <PageWidthContainer>
      {matches ? (
        <Banner />
      ) : (
        <StyledNoBannerFrame>
          <StyledDrawerButtonsContainer>
            <FiltersButton>filters</FiltersButton>
            <SortButton>sort</SortButton>
          </StyledDrawerButtonsContainer>
          <SearchBar />
        </StyledNoBannerFrame>
      )}
      <ResultsBody />
    </PageWidthContainer>
  );
}
