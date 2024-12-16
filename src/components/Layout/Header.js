import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-md z-10">
        <h1 className="text-2xl font-bold">Tang's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="relative h-[25rem] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover" // absolute positioning and inset-0
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
