import Card from "./Card";
const List = ({ data, category }) => {
  const fruits = data[category];
  return (
    <>
      {fruits.map((fruit) => (
        <Card fruit={fruit} key={fruit.ref} />
      ))}
    </>
  );
};

export default List;
