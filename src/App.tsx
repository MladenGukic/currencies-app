import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";
import {AddEditCurrency} from "./components/AddEditCurrency"
function App() {
  return (
    <>
      <SplitHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/currencies" />} />
        <Route path="add" element={<AddEditCurrency/>} />
      </Routes>
    </>
  );
}

export default App;
