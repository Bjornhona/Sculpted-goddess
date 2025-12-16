import axios from 'axios';

export const getRecipesBySearchWord = async (searchWord: string) => {
  let hits = []
  let count = 0
  try {
    const response = await axios.get(`${process.env.THEMEALDB_BASE_URL}/${process.env.THEMEALDB_API_KEY}/search.php?s=${searchWord}`);
    const responseJSON = response.data;
    if (responseJSON.meals && Array.isArray(responseJSON.meals)) {
      hits = responseJSON.meals;
      count = responseJSON.meals.length;
    }
    return {hits: hits, count: count}
  } catch (err) {
    console.error("Error fetching recipes:", err);
  }
  return {hits: [], count: 0};
}

export const getRecipeDetailsById = async (id: string) => {
  let details = []
  try {
    const response = await axios.get(`${process.env.THEMEALDB_BASE_URL}/${process.env.THEMEALDB_API_KEY}/lookup.php?i=${id}`);
    const responseJSON = response.data;
    if (responseJSON.meals && Array.isArray(responseJSON.meals)) {
      details = responseJSON.meals;
    }
    return details;
  } catch (err) {
    console.error("Error fetching recipe details:", err);
  }
  return details;
}
