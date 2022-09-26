import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";
import { AddEditCurrency } from "./components/AddEditCurrency";
import { SidebarCurrencies } from "./components/SidebarCurrencies";
import styled, { createGlobalStyle } from "styled-components";
import { Currency } from "./models/currency";
import { DUMMY_CURRENCIES } from "./dummy-currencies";

function App() {
  const [currencies, setCurrencies] = useState(
    JSON.parse(localStorage.getItem("currencies") || "[]"),
  );

  const storeInLocalStorage = (newCurrencies: Currency[]) => {
    localStorage.setItem("currencies", JSON.stringify(newCurrencies));
    return JSON.parse(localStorage.getItem("currencies") || "[]");
  };

  const addCurrency = (currencyCode: string, currencySymbol: string) => {
    const newCurrency = new Currency(
      currencyCode.toUpperCase(),
      currencySymbol,
    );

    setCurrencies((prevCurrencies: Currency[]) => {
      const newCurrencies = prevCurrencies.concat(newCurrency);
      return storeInLocalStorage(newCurrencies);
    });
  };

  const removeCurrency = (id: string) => {
    setCurrencies((prevCurrencies: Currency[]) => {
      const newCurrencies = prevCurrencies.filter((curr) => curr.id !== id);
      return storeInLocalStorage(newCurrencies);
    });
  };

  const editCurrency = (currency: {
    id: string;
    currencyCode: string;
    currencySymbol: string;
  }) => {
    let newCurrencies = currencies.map((curr: Currency): Currency => {
      if (curr.id === currency.id) {
        return currency;
      }
      return curr;
    });
    storeInLocalStorage(newCurrencies);
    setCurrencies(newCurrencies);
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currencies") || "[]")) {
      localStorage.setItem("currencies", JSON.stringify(DUMMY_CURRENCIES));
    }
  }, []);
  return (
    <>
      <SplitHeader />
      <ContentWrapper>
        <SidebarCurrencies
          currencies={currencies}
          removeCurrency={removeCurrency}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/currencies" />} />
          <Route
            path="currencies/add"
            element={
              <AddEditCurrency
                currencies={currencies}
                addCurrency={addCurrency}
                editCurrency={editCurrency}
              />
            }
          />
          <Route
            path="currencies/edit/:id"
            element={
              <AddEditCurrency
                currencies={currencies}
                addCurrency={addCurrency}
                editCurrency={editCurrency}
              />
            }
          />
        </Routes>
      </ContentWrapper>

      <GlobalStyle />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    * {
      box-sizing: border-box;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
`;
