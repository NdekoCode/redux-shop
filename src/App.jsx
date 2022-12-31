import "./App.css";
import SideMenu from "./components/container/SideMenu";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <SideMenu />
          <div className="col-sm">Store</div>
        </div>
      </div>
    </>
  );
}

export default App;
