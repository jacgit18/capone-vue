import { axiosClient } from "../axiosClient";


export const searchMeals = {
    searchMeals: ({ commit }, keyword) => {
      axiosClient.get(`/search.php?s=${keyword}`)
        .then(({ data }) => {
          // Ensure to log or process data correctly
          console.log(data);
          commit('setSearchedMeals', data.meals); // Adjust 'data.searchMeals' if needed
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    },
  };
  

  export const searchMealsByLetter = {
    searchMeals: ({ commit }, keyword) => {
      axiosClient.get(`/search.php?s=${keyword}`)
        .then(({ data }) => {
          // Ensure to log or process data correctly
          console.log(data);
          commit('setSearchedMeals', data.meals); // Adjust 'data.searchMeals' if needed
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    },
  };