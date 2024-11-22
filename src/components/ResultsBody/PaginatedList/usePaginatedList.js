import { useEffect, useState } from "react";
import { api } from "../../../shared/api.js";

export const usePaginatedList = (limit) => {
  const [venuesOnPage, setVenuesOnPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [numberOfAllPages, setNumberOfAllPages] = useState(null);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function getDataOnPage(page, limit) {
      setIsLoading(true);
      try {
        const venuesResponse = await api.getVenuesOnPage(page, limit);
        setNumberOfAllPages(venuesResponse.pages);
        setVenuesOnPage(venuesResponse.data);
      } catch (error) {}
      setIsLoading(false);
    }
    getDataOnPage(page, limit);
  }, [page, limit]);

  return { venuesOnPage, isLoading, numberOfAllPages, page, handleChange };
};
