import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/container/List";
import SideMenu from "./components/container/SideMenu";
import Navbar from "./components/header/Navbar";
import list from "./libs/data/data";

function App() {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProduct] = useState([]);
  useEffect(() => {
    setProduct(list[category]);
    if (search.length >= 1) {
      setProduct(list[category].filter((p) => p.name.includes(search)));
    }
  }, [category, search]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <SideMenu setCategory={setCategory} category={category} />
          <div className="col-sm">
            <div className="row">
              <List data={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
