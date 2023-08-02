import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { AppContext } from "../Context/ContextApi";
import { Header } from "./";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<p>Home</p>} />
            <Route path="/searchResult/:searchQuery" element={<p>Search</p>} />
            <Route path="/video/:id" element={<p>Video</p>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
