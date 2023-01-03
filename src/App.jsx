import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
