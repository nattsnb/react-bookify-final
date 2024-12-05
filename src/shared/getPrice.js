import { useContext, useEffect, useState } from "react";
import { api } from "./api.js";
import { Context } from "../App.jsx";

export function usePriceInPLNData(pricePerNightInEURCent) {
  const [priceInPLN, setPriceInPLN] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const setContextIsError = useContext(Context)[1];

  useEffect(() => {
    async function getCurrencyData() {
      setIsLoading(true);
      try {
        const currencyResponse = await api.getCurrencyResults();
        const plnRate = currencyResponse.rates.PLN;
        const calculatedPrice = (
          (pricePerNightInEURCent / 100) *
          plnRate
        ).toFixed(0);
        setPriceInPLN(calculatedPrice);
      } catch (error) {
        setContextIsError(true);
        console.error("Error while fetching currency data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getCurrencyData();
  }, [priceInPLN, setContextIsError]);

  return { priceInPLN, isLoading };
}
