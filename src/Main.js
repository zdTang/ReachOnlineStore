import { useState } from "react";
import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";
import MealDetail from "./components/MealDetail/MealDetail";

function Main() {
  const [mealDetailIsShown, setMealDetailShown] = useState(false);
  const [detail, setDetail] = useState({});

  const showMealDetailHandler = (newDetail) => {
    setDetail((prevDetail) => ({ ...prevDetail, ...newDetail }));
    setMealDetailShown(true);
  };

  const hideMealDetailHandler = () => {
    setMealDetailShown(false);
  };

  return (
    <div>
      {mealDetailIsShown && (
        <MealDetail onClose={hideMealDetailHandler} detail={detail} />
      )}

      <main>
        <Meals onShowMealDetail={showMealDetailHandler} />
      </main>
    </div>
  );
}

export default Main;
