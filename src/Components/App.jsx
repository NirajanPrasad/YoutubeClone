import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { AppContext } from "../Context/ContextApi";
import { Header, Feed, VideoDetails } from "./";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<p>Search</p>} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
