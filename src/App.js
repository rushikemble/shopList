import React from "react";
import FormPage from "./Components/FormPage";
import HomePage from "./Components/HomePage";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/formpage" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
