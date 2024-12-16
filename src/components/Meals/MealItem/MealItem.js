import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meal flex justify-between items-center m-4 pb-4 border-b border-gray-300">
      <div>
        <h3 className="mb-1">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">{price}</div>
      </div>
      <div>
        <img
          className="transition-all duration-200 ease-in-out cursor-pointer active:scale-95 active:shadow-inner h-[150px] w-[200px] object-cover"
          onClick={() =>
            props.onShowMealDetail({
              name: props.name,
              src: `/meal/${props.img}.jpg`,
              des: props.description,
              price,
            })
          }
          src={`/meal/${props.img}.jpg`}
          alt={props.img}
        />
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
