import { Currency } from "../models/currency";

export const getCurrencies = (): Currency[] => {
  return JSON.parse(localStorage.getItem("currencies") || "[]");
};

export const putCurrencies = (currencies: Currency[]): void => {
  localStorage.setItem("currencies", JSON.stringify(currencies));
};

export const postCurrency = (currency: Currency): void => {
  let prevCurrencies = getCurrencies();
  let newCurrencies = prevCurrencies.concat(currency);
  putCurrencies(newCurrencies);
};

export const deleteCurrency = (id: string): void => {
  let prevCurrencies = getCurrencies();
  let newCurrencies = prevCurrencies.filter((curr) => curr.id !== id);
  putCurrencies(newCurrencies);
};

export const updateCurrency = (currency: Currency): void => {
  let oldCurrencies = getCurrencies();
  let newCurrencies = oldCurrencies.map((curr) =>
    curr.id === currency.id ? currency : curr,
  );
  putCurrencies(newCurrencies);
};
