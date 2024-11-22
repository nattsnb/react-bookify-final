import React from "react";
import { useForm } from "react-hook-form";
import { Button, Collapse, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledCollapseTypographyContainer,
  StyledSearchBarContainer,
} from "./SearchBar.styled.js";
import Typography from "@mui/material/Typography";
import { InputsContainer } from "./InputsContainer.jsx";

export const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const collapseSearchBar = () => {
    setIsCollapsed((prev) => !prev);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchBarContainer>
        {matches ? (
          <Collapse
            in={isCollapsed}
            orientation="horizontal"
            collapsedSize={100}
          >
            <InputsContainer register={register} />
          </Collapse>
        ) : (
          <Collapse in={isCollapsed} collapsedSize={90}>
            <InputsContainer register={register} />
          </Collapse>
        )}

        <StyledCollapseTypographyContainer>
          <Button variant="outlined" onClick={collapseSearchBar}>
            I don't want to be that specific
          </Button>
        </StyledCollapseTypographyContainer>

        <Button variant="contained" type="submit">
          Search for venue
        </Button>
      </StyledSearchBarContainer>
    </form>
  );
};
