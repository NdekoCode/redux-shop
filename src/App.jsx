import "./App.css";
import List from "./components/container/List";
import SideMenu from "./components/container/SideMenu";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu />
          <div className="col-sm">
            <div className="row">
              <List />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
