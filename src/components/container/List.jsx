import Card from "./Card";
const List = ({ data, incrementCart }) => {
  return (
    <>
      {data.map((item) => (
        <Card incrementCart={incrementCart} item={item} key={item.ref} />
      ))}
    </>
  );
};

export default List;
