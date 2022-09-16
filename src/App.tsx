import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";
import { AddEditCurrency } from "./components/AddEditCurrency";
import { CurrenciesContextProvider } from "./store/currencies-context";

function App() {
  return (
    <CurrenciesContextProvider>
      <SplitHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/currencies" />} />
        <Route path="currencies/add" element={<AddEditCurrency />} />
      </Routes>
    </CurrenciesContextProvider>
  );
}

export default App;
