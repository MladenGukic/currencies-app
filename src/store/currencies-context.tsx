import React, { useEffect, useState } from "react";
import { Currency } from "../models/currency";
import { DUMMY_CURRENCIES } from "../dummy-currencies";

type CurrenciesContextObject = {
  currencies: Currency[];
  addCurrency: (currencyCode: string, currencySymbol: string) => void;
};

export interface CurrenciesProps {
  children?: React.ReactNode;
}
export const CurrenciesContext = React.createContext<CurrenciesContextObject>({
  currencies: [],
  addCurrency: () => {},
});

export const CurrenciesContextProvider = (props: CurrenciesProps) => {
  const [currencies, setCurrencies] = useState<Currency[]>(
    JSON.parse(localStorage.getItem("currencies") || "[]")
  );

  const addCurrencyHandler = (currencyCode: string, currencySymbol: string) => {
    const newCurrency = new Currency(currencyCode, currencySymbol);

    setCurrencies((prevCurrencies) => {
      const newCurrencies = prevCurrencies.concat(newCurrency);
      localStorage.setItem("currencies", JSON.stringify(newCurrencies));
      return JSON.parse(localStorage.getItem("currencies") || "[]");
    });
  };

  const contextValue: CurrenciesContextObject = {
    currencies: currencies,
    addCurrency: addCurrencyHandler,
  };

  useEffect(() => {
    localStorage.setItem("currencies", JSON.stringify(DUMMY_CURRENCIES));
  }, []);

  return (
    <CurrenciesContext.Provider value={contextValue}>
      {props.children}
    </CurrenciesContext.Provider>
  );
};
