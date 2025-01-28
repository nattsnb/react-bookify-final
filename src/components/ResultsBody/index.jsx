import { FiltersDrawer } from "./FiltersDrawer.jsx";
import { ResultsElementsWrapper } from "./ResultsElementsWrapper.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import {
  FiltersButton,
  SortButton,
  StyledDrawerButtonsContainer,
  StyledNoBannerFrame,
  StyledWideContentContainer,
  StyleThinContentContainer,
} from "./Results.styled.js";
import { PaginatedList } from "./PaginatedList/index.jsx";
import React, { useState, useContext } from "react";
import { SearchBar } from "../Banner/SearchBar/index.jsx";
import { SortDrawer } from "./SortDrawer.jsx";
import { Context } from "../../App.jsx";

const INITIAL_LIMIT = 6;

export function ResultsBody() {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSortDrawerOpen, setIsSortDrawerOpen] = useState(false);

  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const toggleFiltersDrawer = (boolean) => () => {
    setIsFilterDrawerOpen(boolean);
  };

  const toggleSortDrawer = (boolean) => () => {
    setIsSortDrawerOpen(boolean);
  };

  return (
    <PageWidthContainer>
      {isViewportLargerThanMd ? (
        <StyledWideContentContainer>
          <FiltersDrawer />
          <ResultsElementsWrapper limit={limit} setLimit={setLimit} />
        </StyledWideContentContainer>
      ) : (
        <>
          <StyledNoBannerFrame>
            <StyledDrawerButtonsContainer>
              <FiltersButton onClick={toggleFiltersDrawer(true)}>
                filters
              </FiltersButton>
              <SortButton onClick={toggleSortDrawer(true)}>sort</SortButton>
            </StyledDrawerButtonsContainer>
            <Drawer
              open={isFilterDrawerOpen}
              onClose={toggleFiltersDrawer(false)}
            >
              <FiltersDrawer />
            </Drawer>
            <Drawer
              anchor="right"
              open={isSortDrawerOpen}
              onClose={toggleSortDrawer(false)}
            >
              <SortDrawer />
            </Drawer>
            <SearchBar />
          </StyledNoBannerFrame>
          <StyleThinContentContainer>
            <PaginatedList limit={limit} />
          </StyleThinContentContainer>
        </>
      )}
    </PageWidthContainer>
  );
}
