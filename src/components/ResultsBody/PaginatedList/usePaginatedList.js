import { useContext, useEffect, useState } from "react";
import { api } from "../../../shared/api.js";
import { ErrorContext } from "../../../App.jsx";

export const usePaginatedList = (limit) => {
  const [venuesOnPage, setVenuesOnPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfAllPages, setNumberOfAllPages] = useState(null);
  const [page, setPage] = useState(1);
  const { setIsError } = useContext(ErrorContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function getData(page, limit) {
      setIsLoading(true);
      try {
        const allVenuesResponse = await api.getAllVenues();
        const numberOfVenues = allVenuesResponse.length;
        setNumberOfAllPages(parseInt(numberOfVenues / limit));
        const venuesResponse = await api.getVenuesOnPage(page, limit);
        setVenuesOnPage(venuesResponse);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getData(page, limit);
  }, [page, limit]);


  return {
    venuesOnPage,
    isLoading,
    numberOfAllPages,
    page,
    handleChange,
  };
};
