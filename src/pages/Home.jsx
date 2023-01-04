import List from "./components/container/List";
import SideMenu from "./components/SideMenu";

function Home({ setCategory, products, category, increment }) {
  return (
    <>
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

export default Home;
