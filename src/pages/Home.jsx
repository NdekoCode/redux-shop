import List from "./components/Home/List";
import SideMenu from "./components/SideMenu";

function Home({ setCategory, products, category }) {
  return (
    <>
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

export default Home;
