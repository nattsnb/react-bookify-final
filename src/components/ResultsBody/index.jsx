import { FiltersDrawer } from "./FiltersDrawer.jsx";
import { ResultsBodyElementsWrapper } from "./ResultsBodyElementsWrapper.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import {Drawer, useMediaQuery, useTheme} from "@mui/material";
import {
  FiltersButton, SortButton,
  StyledDrawerButtonsContainer,
  StyledNoBannerFrame,
  StyledWideBodyContentContainer,
  StyleThinBodyContentContainer,
} from "./ResultsBody.styled.js";
import { PaginatedList } from "./PaginatedList/index.jsx";
import React, { useState } from "react";
import {SearchBar} from "../Banner/SearchBar/index.jsx";
import {SortDrawer} from "./SortDrawer.jsx";

export function ResultsBody() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [limit, setLimit] = useState(6);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = React.useState(false);
  const toggleFiltersDrawer = () => () => {
    setIsFilterDrawerOpen((prev) => !prev);
  };
  const [isSortDrawerOpen, setIsSortDrawerOpen] = React.useState(false);

  const toggleSortDrawer = () => () => {
    setIsSortDrawerOpen((prev) => !prev);
  };
  return (
    <PageWidthContainer>
      {matches ? (
        <StyledWideBodyContentContainer>
          <FiltersDrawer />
          <ResultsBodyElementsWrapper limit={limit} setLimit={setLimit} />
        </StyledWideBodyContentContainer>
      ) : (
        <><StyledNoBannerFrame>
          <StyledDrawerButtonsContainer>
            <FiltersButton onClick={toggleFiltersDrawer(true)}>filters</FiltersButton>
            <SortButton onClick={toggleSortDrawer("right", true)}>sort</SortButton>
          </StyledDrawerButtonsContainer>
          <Drawer open={isFilterDrawerOpen} onClose={toggleFiltersDrawer(false)}>
            <FiltersDrawer/>
          </Drawer>
          <Drawer  anchor={"right"}
                   open={isSortDrawerOpen}
                   onClose={toggleSortDrawer(false)}>
            <SortDrawer/>
          </Drawer>
          <SearchBar />
        </StyledNoBannerFrame>
          <StyleThinBodyContentContainer>
            <PaginatedList limit={limit} />
          </StyleThinBodyContentContainer></>

      )}
    </PageWidthContainer>
  );
}
