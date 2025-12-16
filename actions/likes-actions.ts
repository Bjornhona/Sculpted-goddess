'use server';
import { verifyAuth } from "@/lib/auth";
import { 
  getUserLikes,
  toggleLike
} from "@/lib/likes";
import { recipeDetails } from "@/actions/search-actions";
import { Recipe } from "@/components/recipes/recipe-card/RecipeCard";

export async function getAllUserLikes() {
  const { session } = await verifyAuth();
  if (!session) return [];

  return getUserLikes(session.userId);
}

export async function toggleUserLike(recipeId: string) {
  const { session } = await verifyAuth();
  if (!session) throw new Error("Not authenticated");

  return toggleLike(session.userId, recipeId);
}

export async function getLikedRecipesWithDetails(): Promise<{ recipes: Recipe[] }> {
  const { session } = await verifyAuth();
  if (!session) {
    console.log('No session found');
    return { recipes: [] };
  }

  // Fetch the latest likes from database
  const recipeIds = await getUserLikes(session.userId);
  
  if (recipeIds.length === 0) {
    console.log('No liked recipes found');
    return { recipes: [] };
  }

  // Fetch recipe details for each liked recipe
  const likedRecipesArrays = await Promise.all(
    recipeIds.map(async (id: string) => {
      try {
        const details = await recipeDetails(id);
        const recipe = details && details.length > 0 ? details[0] : null;
        console.log(`Fetched recipe for ID ${id}:`, recipe ? recipe.strMeal : 'null');
        return recipe;
      } catch (error) {
        console.error(`Error fetching recipe details for ${id}:`, error);
        return null;
      }
    })
  );

  // Filter out null values and ensure we have valid Recipe objects
  const recipes: Recipe[] = likedRecipesArrays.filter(
    (recipe): recipe is Recipe => 
      recipe !== null && 
      recipe !== undefined && 
      typeof recipe === 'object' && 
      'idMeal' in recipe
  );

  return { recipes };
}
