import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";
import { AddEditCurrency } from "./components/AddEditCurrency";
import { SidebarCurrencies } from "./components/SidebarCurrencies";
import {
  CurrenciesContext,
  CurrenciesContextProvider,
} from "./store/currencies-context";
import styled, { createGlobalStyle } from "styled-components";
import { useContext } from "react";

function App() {
  const { currencies, removeCurrency } = useContext(CurrenciesContext);
  return (
    <CurrenciesContextProvider>
      <SplitHeader />
      <ContentWrapper>
        <SidebarCurrencies
          currencies={currencies}
          removeCurrency={removeCurrency}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/currencies" />} />
          <Route path="currencies/add" element={<AddEditCurrency />} />
          <Route path="currencies/edit/:id" element={<AddEditCurrency />} />
        </Routes>
      </ContentWrapper>

      <GlobalStyle />
    </CurrenciesContextProvider>
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
