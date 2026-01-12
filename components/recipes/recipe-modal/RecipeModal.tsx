"use client";
import { useRef } from "react";
import styles from "./recipeModal.module.scss";
import Image from "next/image";
import { Recipe } from "@/components/recipes/recipe-card/RecipeCard";
import YouTubeEmbed from "@/components/you-tube-embed/YouTubeEmbed";
import { FaGlobe } from "react-icons/fa";

interface RecipeModalProps {
  onClose: () => void;
  recipe: Recipe;
}

const RecipeModal = ({ onClose, recipe }: RecipeModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const ingredients: { name: string; amount: string }[] = Object.entries(recipe as unknown as Record<string, string>)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([key, value]) => ({
      name: value as string,
      amount: ((recipe as unknown as Record<string, string>)[key.replace("strIngredient", "strMeasure")] as string) || "",
    }));

  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.modalContent} ref={contentRef}>
        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderLeft}>
            <h2>{recipe.strMeal}</h2>
            <div className={styles.modalHeaderBottomRow}>
              <div className={styles.iconContainer}>
                <FaGlobe />
              </div>
              <p>{recipe.strArea}</p>
            </div>
          </div>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            &times;
          </button>
        </div>
        {recipe.strMealThumb && (
          <div className={styles.largeRecipeImage}>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal || "Recipe"}
              width={500}
              height={300}
            />
          </div>
        )}
        <div className={styles.modalBottom}>
          <div className={styles.recipeDetailsGrid}>
            <div className={styles.ingredients}>
              <h5>Ingredients</h5>
              <div className={styles.contentBox}>
                {ingredients.length > 0 ? (
                  ingredients.map((ingredient, index: number) => (
                    <div key={index} className={styles.ingredientItem}>
                      <p className={styles.ingredientName}>{ingredient.name}</p>
                      <p className={styles.ingredientAmount}>({ingredient.amount})</p>
                    </div>
                  ))
                ) : (
                  <p>No ingredients listed</p>
                )}
                <div className={styles.buttonGroup}>
                  {recipe.strSource && (
                    <a
                      href={recipe.strSource}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>See instructions</button>
                    </a>
                  )}
                  <a
                    href={`https://www.themealdb.com/meal.php?c=${recipe.idMeal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View on The Meal DB</button>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.instructions}>
              <h5>Instructions</h5>
              <div className={styles.contentBox}>
                <p>{recipe.strInstructions}</p>
              </div>
            </div>
          </div>
          {recipe.strYoutube && (
            <div className={styles.youtubeSection}>
              <h5>Video Tutorial</h5>
              <div className={styles.youtubeWrapper}>
                <YouTubeEmbed url={recipe.strYoutube} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
