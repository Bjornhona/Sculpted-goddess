import styles from "./macroSummary.module.scss";
import { useWeight } from "@/components/macro-calculator/WeightContext";
import CircleChart from "@/components/macro-calculator/circle-chart/CircleChart";
import { getMacroData, MacroData, getMacroGoals, MacroGoals } from "@/components/macro-calculator/macroData";
import { WeightContextType } from "@/components/macro-calculator/WeightContext";
import BarChart from "@/components/macro-calculator/bar-chart/BarChart";

const MacroSummary = () => {
  const data: WeightContextType = useWeight();
  const macroData: MacroData[] = getMacroData(data);
  const macroGoals: MacroGoals[] = getMacroGoals(data);

  return (
    <div className={styles.manageWeightMainCards}>
      <div className={styles.mainContainer}>
        <div className={`${styles.mainHeaderText} ${styles.mainThreeHeaderText}`}>
          <h2>
            <span>Macronutrient</span> summary
          </h2>
          <h3>To use as a guide when you plan your meals</h3>
        </div>

        <div className={styles.macronutrientSummary} id="macronutrientSummary">
          <h3>Congratulations, here is your Macronutrient Summary!</h3>
          <div className={styles.macronutrientSummaryBox}>
            {macroData.map((item) => (
              <CircleChart key={item.title} {...item} />
            ))}
            <div className={styles.macroCard}>
              <div className={styles.macroCardHeader}>
                <h3>
                  <span>Macronutrient Goals</span>
                </h3>
                <h3>Suggested daily intake</h3>
              </div>
              <div className={styles.progressBarContainer}>
                {macroGoals.map((goal) => (
                  <BarChart key={goal.nutrient} {...goal} />
                ))}   
              </div>
            </div>
          </div>
          <div className={styles.continueButtons}>
            <a href="/manage_weight">
              <button className={styles.newSearchButton}>New search</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroSummary;
