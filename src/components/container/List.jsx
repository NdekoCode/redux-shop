import Card from "./Card";
const List = ({ data }) => {
  const fruits = data[0];
  return (
    <>
      {fruits.map((fruit) => (
        <Card fruit={fruit} key={fruit.ref} />
      ))}
    </>
  );
};

export default List;
