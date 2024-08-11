"use client"
import {useState} from 'react';
import styles from './page.module.scss';
import './modal';
import tomatoImage from '/public/images/tomato.png';
import Image from 'next/image';

const EatHealthy = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const count = 0;
  const hits: any[] = [];

  return (
    <>
      <header className={styles.eatHealthyHeader}>
        <div className={styles.eatHealthyHeaderBox}>
          <h1><span>Healthy</span> Recipes</h1>
          <div className={styles.textBox}>
            <h3>We help you find your prefered recipes so that you can add them to your meal plans.</h3>
            <form action="/eat_healthy" method="POST">
              <div className={styles.search}>
                <div className={styles.searchIcon}><i className="fas fa-search"></i></div>
                <input autoComplete="off" name="search_word" type="name" placeholder="Search"/>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.eatHealthyHeaderImage}>
          <Image src={tomatoImage} alt="Tomato" />
        </div>
      </header>

      <div className={`${styles.eatHealthy} ${styles.container}`}>
        <div className={styles.containerAction}>
          <div>
            <h3><span>Search words:</span> {searchWord}</h3>
            <h3>{count} recipes found</h3>
          </div>
          {/* {searchWord != "Saved recipes" &&
            <form action='/show_saved_recipes' method="POST">
              <button type="submit" className={styles.showSavedButton} id="show-saved" onClick={() => showSaved()}>show saved</button>
            </form>} */}
        </div>
        <div className={styles.featuredRecipesArea}>
          {hits?.map(row => (
            <>
              <div className={styles.smallRecipeContainer}>

                <div className={styles.recipeSelector} onClick={() => setShowModal(!showModal)}>
                  {/* <div className="small-recipe-image"><Image src={row["recipe"]["image"]} alt="recipe"/></div> */}
                  <div className={styles.smallRecipeText}>
                    <div className="recipe-content">
                      <h3>{row["recipe"]["label"]}</h3>
                      <h4>{Math.round(row["recipe"]["totalNutrients"]["ENERC_KCAL"]["quantity"]/row["recipe"]["yield"])} {row["recipe"]["totalNutrients"]["ENERC_KCAL"]["unit"]}/Serving</h4>
                    </div>
                  </div>
                </div>

                {/* <form action="/save_recipe" method="POST" className={styles.saveRecipe}>
                    <input type="hidden" value={row.recipe.uri} name="recipeId">
                    <input type="hidden" value={search_word} name="searchWord">
                    <button type="submit">
                      <div className="icon-container">
                        {row.get('saved') !== 0 ?
                            <div className="save-icon"><i className="fas fa-bookmark"></i></div>
                            <h3>Recipe saved</h3>
                        :
                            <div className="save-icon"><i className="far fa-bookmark"></i></div>
                            <h3>Save recipe</h3>
                        }
                      </div>
                    </button>
                </form> */}
              </div>

              <div className={`${styles.modal} ${showModal ? styles.displayModal : styles.hideModal}`}>
                <span className={styles.close}>&times;</span>
                <div className={styles.modalContent}>
                  <div className={styles.modalHeader}>
                    <div className={styles.modalHeaderLeft}>
                      <h2>{row["recipe"]["label"]}</h2>
                      <div className={styles.macroNutrients}>
                        <h3>{Math.round(row["recipe"]["totalNutrients"]["ENERC_KCAL"]["quantity"])} {row["recipe"]["totalNutrients"]["ENERC_KCAL"]["unit"]} cal</h3>
                        <h3>|</h3>
                        <h3>{Math.round(row["recipe"]["totalNutrients"]["PROCNT"]["quantity"])} {row["recipe"]["totalNutrients"]["PROCNT"]["unit"]} proteins</h3>
                        <h3>|</h3>
                        <h3>{Math.round(row["recipe"]["totalNutrients"]["FAT"]["quantity"])} {row["recipe"]["totalNutrients"]["FAT"]["unit"]} fat</h3>
                        <h3>|</h3>
                        <h3>{Math.round(row["recipe"]["totalNutrients"]["CHOCDF"]["quantity"])} {row["recipe"]["totalNutrients"]["CHOCDF"]["unit"]} carbs</h3>
                      </div>
                      <div className={styles.modalHeaderBottomRow}>
                        <div className={styles.iconContainer}>
                          <div className={styles.icon}><i className="fas fa-user"></i></div>
                          <h3>{Math.round(row["recipe"]["yield"])} servings</h3>
                        </div>
                        <div className={styles.iconContainer}>
                          <div className={styles.icon}><i className="fas fa-clock"></i></div>
                          <h3>{row["recipe"]["totalTime"]} min</h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.modalHeaderRight}>
                      {/* <form action="/save_recipe" method="POST" className="save-recipe">
                        <input type="hidden" value={row.recipe.uri} name="recipeId">
                        <input type="hidden" value={search_word} name="searchWord">
                        <button type="submit">
                          <div className="icon-container">
                            {/* // {% if row.get('saved') is not none: %}
                            //   <div className="save-icon"><i className="fas fa-bookmark"></i></div>
                            //   <h3>Recipe saved</h3>
                            // {% else %}
                            //   <div className="save-icon"><i className="far fa-bookmark"></i></div>
                            //   <h3>Save recipe</h3>
                            // {% endif %}
                          </div>
                        </button>
                      </form> */}
                    </div>
                  </div>
                  <div className="large-recipe-image">
                    {/* <Image src={row["recipe"]["image"]} alt="recipe"/> */}
                  </div>
                  <div className={styles.modalBottom}>
                    <div className={styles.ingredients}>
                      <h2>Ingredients</h2>
                      <div className={styles.contentBox}>
                        {/* // {% for ingredient in row["recipe"]["ingredients"]: %}
                        //   <h3>&#8729; {{ingredient["text"]}} ({{Math.round(ingredient["weight"])}} g)</h3>
                        // {% endfor %} */}
                        <a href={row["recipe"]["url"]} target="_blank"><button>See instructions</button></a>
                      </div>
                    </div>
                    <div className={styles.nutrients}>
                      <h2>Nutrients</h2>
                      <div className={styles.contentBox}>
                        <div className={styles.nutrientsBox}>
                          <h3>Calories</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["ENERC_KCAL"]["quantity"])} {row["recipe"]["totalNutrients"]["ENERC_KCAL"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Fat</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["FAT"]["quantity"])} {row["recipe"]["totalNutrients"]["FAT"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Saturated fat</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["FASAT"]["quantity"])} {row["recipe"]["totalNutrients"]["FASAT"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Polyunsaturated fat</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["FAPU"]["quantity"])} {row["recipe"]["totalNutrients"]["FAPU"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Monounsaturated fat</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["FAMS"]["quantity"])} {row["recipe"]["totalNutrients"]["FAMS"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Carbohydrates</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["CHOCDF"]["quantity"])} {row["recipe"]["totalNutrients"]["CHOCDF"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Sugar</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["SUGAR"]["quantity"])} {row["recipe"]["totalNutrients"]["SUGAR"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Fiber</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["FIBTG"]["quantity"])} {row["recipe"]["totalNutrients"]["FIBTG"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Protein</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["PROCNT"]["quantity"])} {row["recipe"]["totalNutrients"]["PROCNT"]["unit"]}</h3>
                        </div>
                        <div className={styles.nutrientsBox}>
                          <h3>Sodium</h3>
                          <h3>{Math.round(row["recipe"]["totalNutrients"]["NA"]["quantity"])} {row["recipe"]["totalNutrients"]["NA"]["unit"]}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default EatHealthy;
