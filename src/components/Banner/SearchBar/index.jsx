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
  const [iscollapsed, setIscollapsed] = React.useState(false);
  const collapseSearchBar = () => {
    setIscollapsed((prev) => !prev);
  };
  const theme = useTheme();
  const isViewportLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const isViewportLargerThanLG = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledSearchBarContainer>
        {isViewportLargerThanMd ? (
          isViewportLargerThanLG ? (
            <Collapse
              in={iscollapsed}
              orientation="horizontal"
              collapsedSize={245}
            >
              <InputsContainer
                register={register}
                iscollapsed={iscollapsed.toString()}
              />
            </Collapse>
          ) : (
            <Collapse
              in={iscollapsed}
              orientation="horizontal"
              collapsedSize={228}
            >
              <InputsContainer
                register={register}
                iscollapsed={iscollapsed.toString()}
              />
            </Collapse>
          )
        ) : (
          <Collapse in={iscollapsed} collapsedSize={95}>
            <InputsContainer register={register} />
          </Collapse>
        )}

        <StyledCollapseTypographyContainer>
          <Button variant="outlined" onClick={collapseSearchBar}>
            {!iscollapsed
              ? "I want to be more specific (4)"
              : "I don`t want to be that specific"}
          </Button>
        </StyledCollapseTypographyContainer>

        <Button variant="contained" type="submit">
          Search for venue
        </Button>
      </StyledSearchBarContainer>
    </form>
  );
};
