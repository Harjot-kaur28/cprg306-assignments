"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient).then((data) => setMeals(data || []));
    }
  }, [ingredient]);

  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  }

  async function fetchMealDetails(mealId) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  }

  const handleMealClick = async (meal) => {
    if (selectedMeal?.idMeal === meal.idMeal) {
      setSelectedMeal(null);
      setMealDetails(null);
    } else {
      setSelectedMeal(meal);
      const details = await fetchMealDetails(meal.idMeal);
      setMealDetails(details);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Meal Ideas</h2>

      {meals.length > 0 && (
        <p className="text-lg mb-4">
          Here are some meal ideas using <strong>{ingredient}</strong>:
        </p>
      )}

      
      {meals.length > 0 ? (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="bg-orange-800 text-white p-4 shadow-md">
              <button
                onClick={() => handleMealClick(meal)}
                className="text-lg font-semibold w-full text-left"
              >
                {meal.strMeal}
              </button>

              {selectedMeal?.idMeal === meal.idMeal && mealDetails && (
                <div className="mt-2 bg-light-navy text-white p-3 rounded">
                  <h3 className="font-bold">Ingredients needed:</h3>
                  <ul className="list-disc pl-5">
                    {Array.from({ length: 20 }).map((_, index) => {
                      const ingredient = mealDetails[`strIngredient${index + 1}`];
                      const measure = mealDetails[`strMeasure${index + 1}`];
                      return (
                        ingredient &&
                        ingredient.trim() && (
                          <li key={index}>
                            {measure} {ingredient}
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No meal ideas available.</p>
      )}
    </div>
  );
}

