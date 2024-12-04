import { useContext, useEffect, useState } from "react";
import { api } from "../../../shared/api.js";
import { Context } from "../../../App.jsx";

export const usePaginatedList = (limit) => {
  const [venuesOnPage, setVenuesOnPage] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfAllPages, setNumberOfAllPages] = useState(null);
  const [page, setPage] = useState(1);

  const contextSetIsError = useContext(Context)[1];

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function getData(page, limit) {
      setIsLoading(true);
      try {
        const [venuesResponse, currencyResponse] = await Promise.all([
          api.getVenuesOnPage(page, limit),
          api.getCurrencyResults(),
        ]);
        setNumberOfAllPages(venuesResponse.pages);
        setVenuesOnPage(venuesResponse.data);
        setCurrencyData({
          PLN: currencyResponse.rates.PLN,
          EUR: currencyResponse.rates.EUR,
        });
      } catch (error) {
        contextSetIsError(true);
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
