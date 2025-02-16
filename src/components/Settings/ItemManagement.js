import Card from "../UI/Card";
import ItemList from "./ItemList";
const ItemManagement = () => {
  return (
    <section className="max-w-[60rem] w-[90%] my-8  mx-auto animate-meals-appear">
      <Card>
        <ul className="list-none m-0 p-0">
          <h1>Item Management</h1>
          <ItemList />
        </ul>
      </Card>
    </section>
  );
};

export default ItemManagement;
