import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./libs/context/useProfileContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
function App({ items, cartItems, saveToLocal }) {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProduct] = useState([]);

  useEffect(() => {
    setProduct(items[category]);
    if (search.length >= 1) {
      setProduct(
        items
          .flat()
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
    saveToLocal(cartItems);
  }, [category, search, cartItems]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCategory={setCategory}
              category={category}
              products={products}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <UserContextProvider>
              <Checkout />
            </UserContextProvider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
