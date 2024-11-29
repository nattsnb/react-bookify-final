import { Box, Button, MenuItem } from "@mui/material";
import { PaginatedList } from "./PaginatedList/index.jsx";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  StyledLimitWrapper,
  StyledResultsToolbarDiv,
  StyledResultsElementsWrapper,
  StyledLimitTextFiled,
  StyledLimitSettingsContainer,
} from "./Results.styled.js";

const ARRAY_OF_LIMIT_SETTINGS = [6, 18, 36];

export function ResultsElementsWrapper({ limit, setLimit }) {
  const handleNumberOfCardsChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <StyledResultsElementsWrapper>
      <StyledResultsToolbarDiv>
        <StyledLimitSettingsContainer>
          <Box>show</Box>
          <StyledLimitWrapper>
            <StyledLimitTextFiled
              id="select-number-of-cards"
              select
              value={limit}
              onChange={handleNumberOfCardsChange}
              variant="outlined"
            >
              {ARRAY_OF_LIMIT_SETTINGS.map((setting) => (
                <MenuItem key={setting} value={setting}>
                  {setting}
                </MenuItem>
              ))}
            </StyledLimitTextFiled>
          </StyledLimitWrapper>

          <Box>on the page</Box>
        </StyledLimitSettingsContainer>
        <Button>
          <Typography variant="sortButton">sort</Typography>
        </Button>
      </StyledResultsToolbarDiv>
      <PaginatedList limit={limit} />
    </StyledResultsElementsWrapper>
  );
}
