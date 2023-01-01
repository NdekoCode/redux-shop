import Card from "./Card";
const List = ({ data, category }) => {
  return (
    <>
      {data.map((fruit) => (
        <Card fruit={fruit} key={fruit.ref} />
      ))}
    </>
  );
};

export default List;
