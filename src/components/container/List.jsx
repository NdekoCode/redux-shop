import Card from "./Card";
const List = ({ data, item }) => {
  const fruits = data[item];
  return (
    <>
      {fruits.map((fruit) => (
        <Card fruit={fruit} key={fruit.ref} />
      ))}
    </>
  );
};

export default List;
