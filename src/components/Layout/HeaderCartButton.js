import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const buttonClass =
    "cursor-pointer font-inherit border-0 bg-[#4d1601] text-white py-3 px-12 flex justify-around items-center rounded-[25px] font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00]";
  const bumpClass = "animate-bump";
  const btnClasses = `${buttonClass} ${btnIsHighlighted ? bumpClass : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="w-[1.35rem] h-[1.35rem] mr-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] py-1 px-4 rounded-[25px] ml-4 font-bold hover:bg-[#92320c] active:bg-[#92320c]">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
