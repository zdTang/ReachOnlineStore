import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import MealsSummary from "../Meals/MealsSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className="bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-md z-10">
        <h1 className="text-2xl font-bold">Tang's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* Container for image and MealsSummary */}
      <div className="relative h-[5rem] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={mealsImage}
          alt="A table full of delicious food!"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-opacity-80 p-4 rounded-lg shadow-lg max-w-[90%]">
            <MealsSummary />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
