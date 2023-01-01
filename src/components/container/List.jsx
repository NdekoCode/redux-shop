import Card from "./Card";
const List = ({ data, category }) => {
  return (
    <>
      {data.map((item) => (
        <Card item={item} key={item.ref} />
      ))}
    </>
  );
};

export default List;
