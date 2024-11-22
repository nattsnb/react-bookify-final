import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { usePaginatedList } from "./usePaginatedList.js";
import { VenueCard } from "./VenueCard/index.jsx";
import {
  CardContainer,
  CardsWrapper,
  ListWrapper,
  StyledPagination,
} from "./PaginatedList.styled.jsx";

export const PaginatedList = ({ limit }) => {
  const { venuesOnPage, isLoading, numberOfAllPages, page, handleChange } =
    usePaginatedList(limit);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
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
