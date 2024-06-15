// Define your mutations
const setSearchedMeals = (state, meals) => {
    state.searchedMeals = meals;
  };


  const setMealsByLetter = (state, meals) => {
    state.mealsByLetter = meals;
  };

  const setMealsByIngredient = (state, meals) => {
    state.mealsByIngredient = meals;
  };


  const setIngredient = (state, meals) => {
    state.ingredient = meals;
  };


  
  // Export an object containing your mutations
  export const mutations = {
    setSearchedMeals,
    setMealsByLetter,
    setMealsByIngredient,
    setIngredient

  };
  