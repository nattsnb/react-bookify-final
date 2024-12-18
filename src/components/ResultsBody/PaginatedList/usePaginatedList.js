import { useContext, useEffect, useState } from "react";
import { api } from "../../../shared/api.js";
import { ErrorContext } from "../../../App.jsx";

export const usePaginatedList = (limit) => {
  const [venuesOnPage, setVenuesOnPage] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfAllPages, setNumberOfAllPages] = useState(null);
  const [page, setPage] = useState(1);
  const setContextIsError = useContext(ErrorContext)[1];

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function getData(page, limit) {
      setIsLoading(true);
      try {
        const venuesResponse = await api.getVenuesOnPage(page, limit);
        setNumberOfAllPages(venuesResponse.pages);
        setVenuesOnPage(venuesResponse.data);
      } catch (error) {
        setContextIsError(true);
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }

    getData(page, limit);
  }, [page, limit]);

  return {
    venuesOnPage,
    currencyData,
    isLoading,
    numberOfAllPages,
    page,
    handleChange,
  };
};
