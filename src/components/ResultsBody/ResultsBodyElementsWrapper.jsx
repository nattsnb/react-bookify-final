import { Box, Button, MenuItem } from "@mui/material";
import { PaginatedList } from "./PaginatedList/index.jsx";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  StyledDisplayNumberWrapper,
  StyledResultsToolbarDiv,
  StyledResultsBodyElementsWrapper,
  StyledResultsNumberTextFiled,
  StyledLimitSettingsContainer,
} from "./ResultsBody.styled.js";

export function ResultsBodyElementsWrapper({ limit, setLimit }) {
  const arrayOfPaginationSettings = [6, 18, 36];

  const handleNumberOfCardsChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <StyledResultsBodyElementsWrapper>
      <StyledResultsToolbarDiv>
        <StyledLimitSettingsContainer>
          <Box>show</Box>
          <StyledDisplayNumberWrapper>
            <StyledResultsNumberTextFiled
              id="select-number-of-cards"
              select
              value={limit}
              onChange={handleNumberOfCardsChange}
              variant="outlined"
            >
              {arrayOfPaginationSettings.map((setting) => (
                <MenuItem key={setting} value={setting}>
                  {setting}
                </MenuItem>
              ))}
            </StyledResultsNumberTextFiled>
          </StyledDisplayNumberWrapper>

          <Box>on the page</Box>
        </StyledLimitSettingsContainer>
        <Button>
          <Typography variant="sortButton">sort</Typography>
        </Button>
      </StyledResultsToolbarDiv>
      <PaginatedList limit={limit} />
    </StyledResultsBodyElementsWrapper>
  );
}
