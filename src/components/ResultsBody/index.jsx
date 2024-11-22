import { FiltersDrawer } from "./FiltersDrawer.jsx";
import { ResultsBodyElementsWrapper } from "./ResultsBodyElementsWrapper.jsx";
import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  StyledWideBodyContentContainer,
  StyleThinBodyContentContainer,
} from "./ResultsBody.styled.js";
import { PaginatedList } from "./PaginatedList/index.jsx";
import { useState } from "react";

export function ResultsBody() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [limit, setLimit] = useState(6);
  return (
    <PageWidthContainer>
      {matches ? (
        <StyledWideBodyContentContainer>
          <FiltersDrawer />
          <ResultsBodyElementsWrapper limit={limit} setLimit={setLimit} />
        </StyledWideBodyContentContainer>
      ) : (
        <StyleThinBodyContentContainer>
          <PaginatedList limit={limit} />
        </StyleThinBodyContentContainer>
      )}
    </PageWidthContainer>
  );
}
