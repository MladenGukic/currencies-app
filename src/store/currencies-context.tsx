import React, { useEffect, useState } from "react";
import { Currency } from "../models/currency";
import { DUMMY_CURRENCIES } from "../dummy-currencies";
import {
  deleteCurrency,
  getCurrencies,
  postCurrency,
  putCurrencies,
  updateCurrency,
} from "../services/localStorageServices";

type CurrenciesContextObject = {
  currencies: Currency[];
  addCurrency: (currencyCode: string, currencySymbol: string) => void;
  removeCurrency: (id: string) => void;
  editCurrency: (currency: {
    id: string;
    currencyCode: string;
    currencySymbol: string;
  }) => void;
};

export interface CurrenciesProps {
  children?: React.ReactNode;
}
export const CurrenciesContext = React.createContext<CurrenciesContextObject>({
  currencies: [],
  addCurrency: () => {},
  removeCurrency: () => {},
  editCurrency: () => {},
});

export const CurrenciesContextProvider = (props: CurrenciesProps) => {
  const [currencies, setCurrencies] = useState<Currency[]>(getCurrencies());

  const storeInLocalStorage = (newCurrencies: Currency[]): Currency[] => {
    putCurrencies(newCurrencies);
    return getCurrencies();
  };

  const addCurrencyHandler = (
    currencyCode: string,
    currencySymbol: string,
  ): void => {
    const newCurrency = new Currency(
      currencyCode.toUpperCase(),
      currencySymbol,
    );

    setCurrencies(() => {
      postCurrency(newCurrency);
      const newCurrencies = getCurrencies();
      return storeInLocalStorage(newCurrencies);
    });
  };

  const removeCurrencyHandler = (id: string) => {
    setCurrencies(() => {
      deleteCurrency(id);
      const newCurrencies = getCurrencies();
      return storeInLocalStorage(newCurrencies);
    });
  };

  const editCurrencyHandler = (currency: {
    id: string;
    currencyCode: string;
    currencySymbol: string;
  }): void => {
    updateCurrency(currency);
    const newCurrencies = getCurrencies();
    setCurrencies(newCurrencies);
  };

  const contextValue: CurrenciesContextObject = {
    currencies: currencies,
    addCurrency: addCurrencyHandler,
    removeCurrency: removeCurrencyHandler,
    editCurrency: editCurrencyHandler,
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currencies") || "[]")) {
      localStorage.setItem("currencies", JSON.stringify(DUMMY_CURRENCIES));
    }
  }, []);

  return (
    <CurrenciesContext.Provider value={contextValue}>
      {props.children}
    </CurrenciesContext.Provider>
  );
};
