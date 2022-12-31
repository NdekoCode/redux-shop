import "./App.css";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-2">Side menu</div>
          <div className="col-sm">Store</div>
        </div>
      </div>
    </>
  );
}

export default App;
