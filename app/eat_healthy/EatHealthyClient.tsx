'use client';
import { useState } from 'react';
import styles from './eatHealthyClient.module.scss';
import Image from 'next/image';
import tomatoImage from '/public/images/tomato.png';
import RecipeCard from '@/components/recipes/recipe-card/RecipeCard';
import SearchInput from '@/components/search-input/SearchInput';
import { recipeDetails } from '@/actions/search-actions';
import RecipeModal from '@/components/recipes/recipe-modal/RecipeModal';
import { Recipe } from '@/components/recipes/recipe-card/RecipeCard';
import { getLikedRecipesWithDetails } from "@/actions/likes-actions";

interface EatHealthyClientProps {
  initialLikedRecipeIds: string[];
}

const EatHealthyClient = ({ initialLikedRecipeIds }: EatHealthyClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [isLoadingSaved, setIsLoadingSaved] = useState(false);
  const [likedRecipeIds, setLikedRecipeIds] = useState<string[]>(initialLikedRecipeIds);

  const handleRecipesChange = (hits: any[]) => {
    // Only update recipes if we're not in "show saved" mode
    if (!showSaved) {
      setRecipes(hits);
    }
  };

  const handleShowSaved = async () => {
    // Clear current recipes first to avoid showing old recipes
    setRecipes([]);
    setShowSaved(true);
    setIsLoadingSaved(true);
    
    try {
      const result = await getLikedRecipesWithDetails();
      const likedRecipes = result.recipes || [];
      
      // Filter to ensure we only show recipes that exist and have valid data
      const validLikedRecipes = likedRecipes.filter(recipe => recipe && recipe.idMeal);
      
      // Set only liked recipes
      setRecipes(validLikedRecipes);
    } catch (error) {
      console.error('Error fetching saved recipes:', error);
      setRecipes([]);
    } finally {
      setIsLoadingSaved(false);
    }
  };

  const handleLikeChange = async (recipeId: string, liked: boolean) => {
    // Update local liked recipe IDs state
    setLikedRecipeIds(prev => {
      if (liked) {
        return prev.includes(recipeId) ? prev : [...prev, recipeId];
      } else {
        return prev.filter(id => id !== recipeId);
      }
    });

    // If showing saved recipes, refresh the list
    if (showSaved) {
      const { recipes: likedRecipes } = await getLikedRecipesWithDetails();
      setRecipes(likedRecipes);
    }
  };

  const handleRecipeClick = async(idMeal: string) => {
    const recipe = await recipeDetails(idMeal);
    setSelectedRecipe(recipe[0]);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className={styles.eatHealthyHeader}>
        <div className={styles.eatHealthyHeaderBox}>
          <h1><span>Healthy</span> Recipes</h1>
          <div className={styles.textBox}>
            <h3>We help you find your prefered recipes so that you can add them to your meal plans.</h3>
            {!showSaved && <SearchInput key="search-input" onRecipesChange={handleRecipesChange} />}
            {showSaved && <p>Showing your saved recipes</p>}
          </div>
        </div>
        <div className={styles.eatHealthyHeaderImage}>
          <Image src={tomatoImage} alt="Tomato" />
        </div>
      </header>

      <div className={`${styles.eatHealthy} ${styles.container}`}>
        <div className={styles.containerAction}>
          {!showSaved && (
            <button 
              type="button" 
              className={styles.showSavedButton} 
              id="show-saved"
              onClick={handleShowSaved}
            >
              show saved
            </button>
          )}
          {showSaved && (
            <button 
              type="button" 
              className={styles.showSavedButton} 
              onClick={() => {
                setRecipes([]);
                setShowSaved(false);
              }}
            >
              show all recipes
            </button>
          )}
        </div>
        
        <div className={styles.featuredRecipesArea}>
          {isLoadingSaved ? (
            <p className={styles.noRecipesFound}>Loading saved recipes...</p>
          ) : recipes.length > 0 ? (
            recipes.map((recipe: Recipe) => (
              <RecipeCard 
                key={recipe.idMeal} 
                recipe={recipe} 
                onSelectingRecipe={handleRecipeClick}
                onLikeChange={handleLikeChange}
                initialLiked={likedRecipeIds.includes(recipe.idMeal)}
              />
            ))
          ) : (
            <p className={styles.noRecipesFound}>
              {showSaved ? 'No saved recipes found' : 'Search for recipes to view them'}
            </p>
          )}
          {isModalOpen && <RecipeModal onClose={() => setIsModalOpen(false)} recipe={selectedRecipe} />}
        </div>
      </div>
    </>
  );
};

export default EatHealthyClient;
