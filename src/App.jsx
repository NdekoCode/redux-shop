import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/container/List";
import SideMenu from "./components/container/SideMenu";
import Navbar from "./components/header/Navbar";
import { useIncrement } from "./hooks/useIncrement";
import list from "./libs/data/data";

function App() {
  const [category, setCategory] = useState(0);
  const [{ count }, dispatch] = useIncrement();
  const increment = () => {
    console.log("Increment");
    dispatch({ type: "incr" });
  };
  const [search, setSearch] = useState("");
  const [products, setProduct] = useState([]);
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
      <div className="container">
        <div className="row">
          <SideMenu setCategory={setCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List incrementCart={increment} data={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
