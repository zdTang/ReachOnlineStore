import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Header from "../Layout/Header";
// import MealsSummary from "../Meals/MealsSummary";
export default function Navigation() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  // To make Settings nav keep active when choose its child router
  // The goal to do this is to keep the Settings to be active when we are in its children view.
  function isPathActive(currentPath, linkPath) {
    if (linkPath === "/") {
      return currentPath === linkPath;
    }
    return currentPath.startsWith(linkPath);
  }

  const location = useLocation();

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <nav className="bg-gray-100 py-2 px-6 flex justify-end space-x-4">
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
          className={() =>
            `px-3 py-2 rounded-md ${
              isPathActive(location.pathname, "/settings")
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
      {/* <MealsSummary /> */}
    </div>
  );
}
