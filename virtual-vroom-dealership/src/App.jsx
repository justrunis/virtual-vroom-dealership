import Home from "./pages/Home";
import Models from "./pages/Models";
import Vehicles from "./pages/Vehicles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/vehicles/:make" element={<Vehicles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
