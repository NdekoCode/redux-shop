const SideMenu = ({ setIndex }) => {
  const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <button key={index} onClick={() => setIndex(index)}>
              {link}
            </button>
          );
        })}
      </ul>
    </div>
  );
};
export default SideMenu;
