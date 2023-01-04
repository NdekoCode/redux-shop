import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import list from "./libs/data/data";
import { useIncrement } from "./libs/hooks/useIncrement";
import Cart from "./pages/Cart";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
function App({ cartItems, items }) {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProduct] = useState([]);

  const [{ count }, dispatch] = useIncrement();
  const increment = () => {
    console.log("Increment");
    dispatch({ type: "incr" });
  };
  useEffect(() => {
    setProduct(list[category]);
    if (search.length >= 1) {
      setProduct(
        list
          .flat()
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
  }, [category, search]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} count={count} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCategory={setCategory}
              category={category}
              products={products}
              increment={increment}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
