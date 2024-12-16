import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealDetail from "./components/MealDetail/MealDetail";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [mealDetailIsShown, setMealDetailShown] = useState(false);
  const [detail, setDetail] = useState({});

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showMealDetailHandler = (newDetail) => {
    setDetail((prevDetail) => ({ ...prevDetail, ...newDetail }));
    setMealDetailShown(true);
  };

  const hideMealDetailHandler = () => {
    setMealDetailShown(false);
  };

  return (
    <CartProvider>
      {mealDetailIsShown && (
        <MealDetail onClose={hideMealDetailHandler} detail={detail} />
      )}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals onShowMealDetail={showMealDetailHandler} />
      </main>
    </CartProvider>
  );
}

export default App;
