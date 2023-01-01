import Card from "./Card";
const List = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Card item={item} key={item.ref} />
      ))}
    </>
  );
};

export default List;
