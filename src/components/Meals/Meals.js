import { Fragment } from "react";

import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <AvailableMeals onShowMealDetail={props.onShowMealDetail} />
    </Fragment>
  );
};

export default Meals;
