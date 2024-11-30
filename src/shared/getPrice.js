import { useEffect, useState } from "react";
import { api } from "./api.js";

export function getPriceInPLN(pricePerNightInEURCent) {
  const [currencyData, setCurrencyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCurrencyData() {
      setIsLoading(true);
      try {
        const currencyResponse = await api.getCurrencyResults();
        setCurrencyData({
          PLN: currencyResponse.rates.PLN,
        });
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
      setIsLoading(false);
    }

    getCurrencyData();
  }, []);

  if (!isLoading) {
    const pricePreNightInPLN = (
      (pricePerNightInEURCent / 100) *
      currencyData.PLN
    ).toFixed(0);
    return pricePreNightInPLN;
  }
}
