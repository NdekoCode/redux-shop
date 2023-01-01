import { useState } from "react";
import "./App.css";
import List from "./components/container/List";
import SideMenu from "./components/container/SideMenu";
import Navbar from "./components/header/Navbar";
import list from "./libs/data/data";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu setIndex={setIndex} />
          <div className="col-sm">
            <div className="row">
              <List item={index} data={list} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
