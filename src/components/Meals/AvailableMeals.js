//import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import img1 from "../../assets/meal/sushi.jpg";
import img2 from "../../assets/meal/schnitzel.jpg";
import img3 from "../../assets/meal/barbecueburger.jpg";
import img4 from "../../assets/meal/greenbowl.jpg";

const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    img: img1,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    img: img2,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    img: img3,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    img: img4,
  },
];

const AvailableMeals = (props) => {
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [httpError, setHttpError] = useState();

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch(
  //       "https://react-food-court-9720e-default-rtdb.firebaseio.com/meals.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }

  //     const responseData = await response.json();

  //     const loadedMeals = [];

  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //         img: responseData[key].pic.toLowerCase(),
  //       });
  //     }

  //     setMeals(loadedMeals);
  //     setIsLoading(false);
  //   };

  //   fetchMeals().catch((error) => {
  //     setIsLoading(false);
  //     setHttpError(error.message);
  //   });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section className="text-center text-white">
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  // if (httpError) {
  //   return (
  //     <section className="text-center text-red-500">
  //       <p>{httpError}</p>
  //     </section>
  //   );
  // }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

  return (
    <section className="max-w-[60rem] w-[90%] my-8  mx-auto animate-meals-appear">
      <Card>
        <ul className="list-none m-0 p-0">{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
