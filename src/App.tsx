import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./scss/app.scss";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
