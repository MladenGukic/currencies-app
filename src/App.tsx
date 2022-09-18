import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";
import { AddEditCurrency } from "./components/AddEditCurrency";
import { SidebarCurrencies } from "./components/SidebarCurrencies";
import { CurrenciesContextProvider } from "./store/currencies-context";

function App() {
  return (
    <CurrenciesContextProvider>
      <SplitHeader />
      <SidebarCurrencies />
      <Routes>
        <Route path="/" element={<Navigate to="/currencies" />} />
        <Route path="currencies/add" element={<AddEditCurrency />} />
      </Routes>
    </CurrenciesContextProvider>
  );
}

export default App;
