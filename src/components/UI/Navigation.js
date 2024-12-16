import { NavLink } from "react-router";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
import MealsSummary from "../Meals/MealsSummary";
export default function Navigation() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <nav className="bg-gray-100 py-6 px-6 flex justify-end space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md ${
              isActive
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md ${
              isActive
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
          end
        >
          Settings
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md ${
              isActive
                ? "bg-red-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`
          }
          end
        >
          Find Us
        </NavLink>
      </nav>
      <MealsSummary />
    </div>
  );
}
