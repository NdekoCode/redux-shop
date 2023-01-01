const SideMenu = ({ setCategory }) => {
  const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"];
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                console.log(index);
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
