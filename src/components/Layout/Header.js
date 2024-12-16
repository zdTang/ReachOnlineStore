import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-md z-10">
        <h1 className="text-2xl font-bold">Tang's Noodles</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-[25rem] z-0 overflow-hidden">
        <img
          className="w-[110%] h-full object-cover transform rotate-[-5deg] translate-y-[-4rem] translate-x-[-1rem]"
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
