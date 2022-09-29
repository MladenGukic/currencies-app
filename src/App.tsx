import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";
import { AddEditCurrency } from "./components/AddEditCurrency";
import { SidebarCurrencies } from "./components/SidebarCurrencies";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <SplitHeader />
      <ContentWrapper>
        <SidebarCurrencies />
        <Routes>
          <Route path="/" element={<Navigate to="/currencies" />} />
          <Route path="currencies/add" element={<AddEditCurrency />} />
          <Route path="currencies/edit/:id" element={<AddEditCurrency />} />
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
