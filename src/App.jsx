import "./App.css";
import Card from "./components/container/Card";
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
