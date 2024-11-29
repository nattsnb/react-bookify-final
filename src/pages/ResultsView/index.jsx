import { PageWidthContainer } from "../../shared/styledComponents/pageWidthContainer.js";
import { Banner } from "../../components/Banner/index.jsx";
import { useMediaQuery, useTheme } from "@mui/material";
import { ResultsBody } from "../../components/ResultsBody/index.jsx";
import React from "react";

export function Results() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <PageWidthContainer>
      {matches ? <Banner /> : <></>}
      <ResultsBody />
    </PageWidthContainer>
  );
}
