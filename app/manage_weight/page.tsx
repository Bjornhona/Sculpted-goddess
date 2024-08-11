import Image from 'next/image';
import styles from './page.module.scss';
import manageWeightImage from '/public/images/manage-weight.png';

const ManageWeight = () => {
  const tdee = 'tdee';
  const calVal = 'calVal';
  const bmi = 'bmi';
  const bmiResult = 'bmiResult';
  const recommendedCalIntake = 1400;
  const desiredWeight = 58;
  const milestoneWeight = 61;
  const carbs = 156;
  const prot = 134;
  const fat = 21;
  const weight = 64;

  const manage = () => {};
  const manageMacro = () => {};

  return (
    <>
      <header className={styles.manageWeightHeader}>
        <div className={styles.manageWeightHeaderBox}>
          <h1><span>Weightloss</span> Program</h1>
          <div className={styles.textBox}>
            <h3>We help you create your personally adapted meal plans so that you can achieve your goals.</h3>
          </div>
        </div>
        <div className={styles.manageWeightHeaderImage}>
          <Image id="header-image" src={manageWeightImage} alt="Manage weight" />
        </div>
      </header>

      <main>
        {/* -- Calculate Dietary Needs Form -- */}
        {!tdee && !calVal &&
          <div className={styles.manageWeightMain}>
            <div className={styles.mainHeaderText} id="dietaryNeedsContainer">
              <h2><span>Introduce</span> your data</h2>
              <h3>To calculate your dietary needs</h3>
            </div>
            <form className={styles.mainContent} id="dietaryNeeds" action="/manage_weight" method="POST">
              <div className={styles.genderBox}>
                <h3><span>Gender</span></h3>
                <div className={styles.genderContainer}>
                  <div>
                    <input className={styles.maleInput} type="radio" id="male" name="gender" onClick={manage} value="5" required />
                    <label className={styles.male} htmlFor="male">
                      <i className="fas fa-male"></i>
                      <div className={styles.textBox}>
                        <h3>I am</h3>
                        <h2>male</h2>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input className={styles.femaleInput} type="radio" id="female" name="gender" onClick={manage} value="-161" />
                    <label className={styles.female} htmlFor="female">
                      <i className="fas fa-female"></i>
                      <div className={styles.textBox}>
                        <h3>I am</h3>
                        <h2>female</h2>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.weightHeightAgeContainer}>
                <div className={styles.weight}>
                  <h3><span>Weight</span></h3>
                  <input type="number" id="weight" name="weight" onKeyUp={manage} placeholder="0" min="0" max="300" required />
                  <h3 className={styles.unit}>kg</h3>
                </div>
                <div className={styles.height}>
                  <h3><span>Height</span></h3>
                  <input type="number" id="height" name="height" onKeyUp={manage} placeholder="0" min="0" max="300" required />
                  <h3 className={styles.unit}>cm</h3>
                </div>
                <div className={styles.age}>
                  <h3><span>Age</span></h3>
                  <input type="number" id="age" name="age" onKeyUp={manage} placeholder="0" min="0" max="130" required/>
                  <h3 className={styles.unit}>years</h3>
                </div>
              </div>
              <div className={styles.activityLevel}>
                <h3><span>Activity level</span></h3>
                <div className={styles.activityOptionsContainer} id="level">
                  <label className={styles.container} htmlFor="sedentary">
                    <input type="radio" id="sedentary" name="activity" onClick={manage} value={1.2} required />
                    <span className={styles.checkmark}></span>
                  </label>
                  
                  <label className={styles.container} htmlFor="lightly-active">
                    <input type="radio" id="lightly-active" name="activity" onClick={manage} value={1.375} />
                    <span className={styles.checkmark}></span>
                  </label>
                  
                  <label className={styles.container} htmlFor="moderately-active">
                    <input type="radio" id="moderately-active" name="activity" onClick={manage} value={1.55} />
                    <span className={styles.checkmark}></span>
                  </label>
                  
                  <label className={styles.container} htmlFor="very-active">
                    <input type="radio" id="very-active" name="activity" onClick={manage} value={1.725} />
                    <span className={styles.checkmark}></span>
                  </label>

                  <label className={styles.container} htmlFor="extra-active">
                    <input type="radio" id="extra-active" name="activity" onClick={manage} value={1.9} />
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
                <div className={styles.labelText}>
                  <h4>sedentary</h4>
                  <h4>extra active</h4>
                </div>
              </div>
              <div className={styles.calculateCalories}>
                <button disabled type="submit" id="submit-button">Calculate calorie intake</button>
              </div>
            </form>
          </div>
        }

        {/* -- Desired Weight Form -- */}
        {tdee && !calVal &&
          <div className={styles.manageWeightMain}>
            <div className={`${styles.mainHeaderText} ${styles.mainTwoHeaderText}`} id="desiredWeightContainer">
              <h2><span>Set your</span> goal</h2>
              <h3>To calculate your macronutrient ratio</h3>
            </div>
            <form className={styles.mainContent} id="macronutrientRatio" action="/manage_weight/macronutrients" method="POST">
              <h3>Congratulations, your total number of calories burned in a day is <span>{tdee}</span> cal!</h3>

              <div className={styles.actionBox}>
                <h3><span>Desired action</span></h3>
                <div className={styles.actionContainer}>
                  <div>
                    <input className={styles.gainInput} type="radio" id="gain" name="action" onClick={manageMacro} value="gain" required />
                    <label className={styles.gain} htmlFor="gain">
                      <i className="fas fa-dumbbell"></i>
                      <div className={styles.textBox}>
                        <h3>I want to</h3>
                        <h2>gain muscle</h2>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input className={styles.loseInput} type="radio" id="lose" name="action" onClick={manageMacro} value="lose" />
                    <label className={styles.lose} htmlFor="lose">
                      <i className="fas fa-weight"></i>
                      <div className={styles.textBox}>
                        <h3>I want to</h3>
                        <h2>lose weight</h2>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className={styles.desiredWeightContainer}>
                <div className={styles.weight}>
                  <h3><span>Desired weight</span></h3>
                  {/* <input type="number" id="desiredWeight" name="desiredWeight" onKeyUp={() => manageMacro(`${weight}`)} placeholder="0" min="0" max="300" required /> */}
                  <h3 className={styles.unit}>kg</h3>
                </div>
              </div> 
          
              <div className={styles.calculateMakro}>
                <button disabled type="submit" id="macro-button">Show my makro needs</button>
              </div>
            </form>
          </div>
        }

        {/* -- Macronutrient Summary -- */}
        {calVal &&
          <div className={styles.manageWeightMainCards}>
            <div className={`${styles.mainHeaderText} ${styles.mainThreeHeaderText}`}>
              <h2><span>Macronutrient</span> summary</h2>
              <h3>To use as a guide when you plan your meals</h3>
            </div>

            <div className={styles.macronutrientSummary} id="macronutrientSummary">
              <h3>Congratulations, here is your Macronutrient Summary!</h3>
              <div className={styles.macronutrientSummaryBox}>

                <div className={styles.macroCard}>
                  <h3>Body Mass Index (BMI)</h3>
                  <div className={styles.cardCircle}>
                    <div className={styles.percent}>
                      <svg>
                        <circle cx="50%" cy="50%" r="45%"></circle>
                        <circle id="firstCircle" cx="50%" cy="50%" r="45%"></circle>
                      </svg>
                      <div className={styles.number}>
                        <h3><span>{bmi}</span></h3>
                        <h3>kg/m2</h3>
                      </div>
                    </div>
                    <h3>Your BMI:</h3>
                    <h4>{bmiResult}</h4>
                  </div>
                </div>

                <div className={styles.macroCard}>
                  <h3>Calorie intake (per day)</h3>
                  <div className={styles.cardCircle}>
                    <div className={styles.percent}>
                      <svg>
                        <circle cx="50%" cy="50%" r="45%"></circle>
                        <circle id="secondCircle" cx="50%" cy="50%" r="45%"></circle>
                      </svg>
                      <div className={styles.number}>
                        <h3><span>{recommendedCalIntake}</span></h3>
                        <h3>Calories</h3>
                      </div>
                    </div>
                    <h3>To reach final weight:</h3>
                    <h4>{desiredWeight} kg</h4>
                  </div>
                </div>

                <div className={styles.macroCard}>
                  <h3>30 Day Milestone</h3>
                  <div className={styles.cardCircle}>
                    <div className={styles.percent}>
                      <svg>
                        <circle cx="50%" cy="50%" r="45%"></circle>
                        <circle id="thirdCircle" cx="50%" cy="50%" r="45%"></circle>
                      </svg>
                      <div className={styles.number}>
                        <h3><span>{milestoneWeight}</span></h3>
                        <h3>kg</h3>
                      </div>
                    </div>
                    <h3>To reach milestone:</h3>
                    <h4>{milestoneWeight} kg</h4>
                  </div>
                </div>

                <div className={styles.macroCard}>
                  <div>
                    <h3><span>Macronutrient Goals</span></h3>
                    <h3>Suggested daily intake</h3>
                  </div>

                  <div className={styles.progressBarContainer}>
                    <div>
                      <h3>Carbs - {carbs} g</h3>
                      <div className={styles.barHolder}>
                        <div id="bar1" className={`${styles.bar} ${styles.bar1}`}></div>
                      </div>
                    </div>

                    <div>
                      <h3>Proteins - {prot} g</h3>
                      <div className={styles.barHolder}>
                        <div id="bar2" className={`${styles.bar} ${styles.bar2}`}></div>
                      </div>
                    </div>

                    <div>
                      <h3>Fats - {fat} g</h3>
                      <div className={styles.barHolder}>
                        <div id="bar3" className={`${styles.bar} ${styles.bar3}`}></div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className={styles.continueButtons}>
                <a href="/manage_weight"><button className={styles.newSearchButton}>New search</button></a>
                <a href="/manage_weight/save_macros"><button className={styles.saveDataButton}>Save data</button></a>
              </div>
            </div>
          </div>
        }

      </main>
    </>
  )
}

export default ManageWeight;
