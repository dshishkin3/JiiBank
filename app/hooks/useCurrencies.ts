import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { url } from "../components/screens/more/currencies/API";
import { ICurrency } from "../components/screens/more/currencies/types";

export const useCurrencies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}&base_currency=RUB`);
        const result = await res.json();

        setCurrencies([
          { name: "USD", value: (1 / result.data.USD).toFixed(2) },
          { name: "EUR", value: (1 / result.data.EUR).toFixed(2) },
          { name: "GBP", value: (1 / result.data.GBP).toFixed(2) },
        ]);
      } catch (error) {
        Alert.alert("Fetch currencies error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, currencies };
};
