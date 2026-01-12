"use client";
import styles from "./desiredWeight.module.scss";
import { useWeight } from "@/components/macro-calculator/WeightContext";
import { saveDietProfile } from "@/actions/macro-actions";
import { FaDumbbell, FaWeight } from "react-icons/fa";

interface DesiredWeightProps {
  onSave: () => void;
}

const DesiredWeight = ({ onSave }: DesiredWeightProps) => {
  const { gender, weight, height, age, activity, recommendedCalIntake, desiredWeight, setDesiredWeight, action, setAction } = useWeight();

  const saveUserData = async (formData: FormData) => {
    await saveDietProfile(formData);
    onSave();
  };

  return (
    <div className={styles.manageWeightMain}>
      <div
        className={`${styles.mainHeaderText} ${styles.mainTwoHeaderText}`}
        id="desiredWeightContainer"
      >
        <h2>
          <span>Set your</span> goal
        </h2>
        <h3>To calculate your macronutrient ratio</h3>
      </div>
      <form
        className={styles.mainContent}
        id="macronutrientRatio"
        action={saveUserData}
      >
        {/* HIDDEN INPUTS */}
        <input type="hidden" name="gender" value={gender ?? ""} />
        <input type="hidden" name="weight" value={weight ?? ""} />
        <input type="hidden" name="height" value={height ?? ""} />
        <input type="hidden" name="age" value={age ?? ""} />
        <input type="hidden" name="activity" value={activity ?? ""} />
        <h3>
          Congratulations, your total number of calories burned in a day is{" "}
          <span>{recommendedCalIntake}</span> cal!
        </h3>

        <div className={styles.actionBox}>
          <h3>
            <span>Desired action</span>
          </h3>
          <div className={styles.actionContainer}>
            <div>
              <input
                className={styles.gainInput}
                type="radio"
                id="gain"
                name="action"
                checked={action === "gain"}
                onChange={() => setAction("gain")}
                value="gain"
                required
              />
              <label className={styles.gain} htmlFor="gain">
                <FaDumbbell />
                <div className={styles.textBox}>
                  <h3>I want to</h3>
                  <h2>gain muscle</h2>
                </div>
              </label>
            </div>
            <div>
              <input
                className={styles.loseInput}
                type="radio"
                id="lose"
                name="action"
                value="lose"
                checked={action === "lose"}
                onChange={() => setAction("lose")}
              />
              <label className={styles.lose} htmlFor="lose">
                <FaWeight />
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
            <h3>
              <span>Desired weight</span>
            </h3>
            <input
              type="number"
              id="desiredWeight"
              name="desiredWeight"
              value={desiredWeight ?? ""}
              onChange={(e) => setDesiredWeight(Number(e.target.value))}
              placeholder="0"
              min={action === "gain" ? weight ?? 0 : 0}
              max={action === "gain" ? 300 : weight ?? 300}
              required
            />
            <h3 className={styles.unit}>kg</h3>
          </div>
        </div>

        <div className={styles.calculateMakro}>
          <button disabled={!action || !desiredWeight} type="submit" id="macro-button">
            Show my makro needs
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesiredWeight;
