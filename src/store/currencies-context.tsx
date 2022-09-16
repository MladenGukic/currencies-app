import React, { useState } from "react";
import { Currency } from "../models/currency";

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
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const addCurrencyHandler = (currencyCode: string, currencySymbol: string) => {
    const newCurrency = new Currency(currencyCode, currencySymbol);

    setCurrencies((prevCurrencies) => {
      return prevCurrencies.concat(newCurrency);
    });
  };

  const contextValue: CurrenciesContextObject = {
    currencies: currencies,
    addCurrency: addCurrencyHandler,
  };

  return (
    <CurrenciesContext.Provider value={contextValue}>
      {props.children}
    </CurrenciesContext.Provider>
  );
};