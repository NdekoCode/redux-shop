import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { list } from "../../data";
import "../../styles/App.css";
import { CartPage } from "./Cart";
import { Home } from "./Home";

const App = (props) => {
  const { items, saveLocalStorage } = props;
  const [category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [count, setCount] = useState(1);
  const loadCategory = (i) => {
    setCategory(i);
  };
  const filterResults = (input) => {
    let fullList = list.flat();
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results);
  };
  useEffect(() => {
    saveLocalStorage(items);
  }, [items]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          filter={filterResults}
          setFiltering={setFiltering}
          count={count}
        />
        <Routes>
          {/* Routes */}
          <Route
            path="/"
            element={
              <Home
                category={category}
                loadCategory={loadCategory}
                list={list}
                isFiltering={isFiltering}
                filtered={filtered}
              />
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
