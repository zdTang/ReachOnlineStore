import { useState, createContext } from "react";
import Meals from "./components/Meals/Meals";
import MealDetail from "./components/MealDetail/MealDetail";

const MealDetailContext = createContext(null);

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
      <MealDetailContext.Provider value={showMealDetailHandler}>
        <Meals />
      </MealDetailContext.Provider>
    </div>
  );
}
export { MealDetailContext };
export default Main;
