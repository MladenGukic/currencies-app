import { Route, Routes, Navigate } from "react-router-dom";
import { SplitHeader } from "./components/SplitHeader";

function App() {
  return (
    <>
    <SplitHeader />
      <Routes> 
        <Route path="/" element={<Navigate to="/currencies" />} />
      </Routes>
    </>
  );
}

export default App;
