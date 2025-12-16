'use server';
import { getRecipeDetailsById, getRecipesBySearchWord } from '@/lib/api/recipes';

export const recipeDetails = async (id: string) => {
  const details = await getRecipeDetailsById(id);
  return details;
}

export const searchRecipes = async (searchWord: string) => {
  const recipies = await getRecipesBySearchWord(searchWord);
  return recipies;
}

export const recipesList = async (prevState: any, formData: FormData) => {
  const searchWord = formData.get('search_word')?.toString() || 'chicken';
  const recipes = await searchRecipes(searchWord);
  return recipes;
}
