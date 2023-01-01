const SideMenu = ({ setCategory, category }) => {
  const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <button
              key={index}
              className={index === category ? "active" : ""}
              onClick={() => {
                console.log(index, category);
                setCategory(index);
              }}
            >
              {link}
            </button>
          );
        })}
      </ul>
    </div>
  );
};
export default SideMenu;
