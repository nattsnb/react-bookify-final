import React, { useContext } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { usePaginatedList } from "./usePaginatedList.js";
import { VenueCard } from "./VenueCard/index.jsx";
import {
  CardContainer,
  CardsWrapper,
  ListWrapper,
  StyledPagination,
} from "./PaginatedList.styled.jsx";
import { VerticalContainer } from "../../../shared/styledComponents/verticalContainer.styled.js";
import { ErrorContext } from "../../../App.jsx";

export const PaginatedList = ({ limit }) => {
  const { venuesOnPage, isLoading, numberOfAllPages, page, handleChange } =
    usePaginatedList(limit);

  const contextIsError = useContext(ErrorContext)[0];

  if (isLoading) {
    return (
      <VerticalContainer>
        <CircularProgress />
      </VerticalContainer>
    );
  }

  if (contextIsError) {
    return null;
  }

  return (
    <ListWrapper>
      <CardsWrapper>
        {limit > 0 ? (
          venuesOnPage.map((venue, index) => (
            <CardContainer key={index}>
              <VenueCard backgroundurl={venue.coverPhoto} venue={venue} />
            </CardContainer>
          ))
        ) : (
          <Typography>No venues found</Typography>
        )}
      </CardsWrapper>
      <StyledPagination
        count={numberOfAllPages}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </ListWrapper>
  );
};
