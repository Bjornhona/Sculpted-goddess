"use client";
import React from "react";
import Image from "next/image";
import styles from "./recipeCard.module.scss";
import LikeButton from "../like-button/LikeButton";

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;
  strSource: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
  onSelectingRecipe: (idMeal: string) => void;
  onLikeChange?: (recipeId: string, liked: boolean) => void;
  initialLiked?: boolean;
}

const RecipeCard = ({ recipe, onSelectingRecipe, onLikeChange, initialLiked }: RecipeCardProps) => {
  return (
    <div className={styles.smallRecipeContainer}>
      <LikeButton 
        recipeId={recipe.idMeal}
        onLikeChange={onLikeChange}
        initialLiked={initialLiked}
      />
      <div 
        className={styles.recipeSelector} 
        onClick={() => onSelectingRecipe(recipe.idMeal)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectingRecipe(recipe.idMeal);
          }
        }}
        aria-label={`View recipe: ${recipe.strMeal}`}
      >
        {recipe.strMealThumb && (
          <div className={styles.smallRecipeImage}>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal || "Recipe"}
              width={300}
              height={200}
              className={styles.recipeImage}
            />
          </div>
        )}
        <div className={styles.smallRecipeText}>
          <div className={styles.recipeContent}>
            <h3>{recipe.strMeal}</h3>
            {recipe.strArea && <p>{recipe.strArea}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
