import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';

import classes from './AvailableMeals.module.css';


// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];


const AvailableMeals = () => {
  // console.log('AvailableMeals is running');
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  // initially we do not wanna have any value in httpError. Initially indefined is fine.


  const mealsList = meals.map(meal => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        description={meal.description}
        name={meal.name}
        price={meal.price}
      />
    )
  });


  useEffect(() => {
    // console.log('effect');

    const fetchMeals = async () => {

      const response = await fetch("https://meals-661d7-default-rtdb.europe-west1.firebasedatabase.app/meals.json");

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const mealId in responseData) {
        loadedMeals.push({
          id: mealId,
          name: responseData[mealId].name,
          description: responseData[mealId].description,
          price: responseData[mealId].price,
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch(error => {
      // console.log(error.message);
      setIsLoading(false);
      setHttpError(error.message);
    })
  }, [])


  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}



export default AvailableMeals;