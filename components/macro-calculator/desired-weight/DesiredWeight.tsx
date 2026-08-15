"use client";
import { useState } from "react";
import styles from "./desiredWeight.module.scss";
import { useWeight } from "@/components/macro-calculator/WeightContext";
import { saveDietProfile } from "@/actions/macro-actions";
import {
  BOUNDS,
  minHealthyWeight,
  type DietProfileFieldErrors,
} from "@/lib/dietaryProfile";
import { FaDumbbell, FaWeight } from "react-icons/fa";

interface DesiredWeightProps {
  onSave: () => void;
}

const DesiredWeight = ({ onSave }: DesiredWeightProps) => {
  const { gender, weight, height, age, activity, tdee, desiredWeight, setDesiredWeight, action, setAction } = useWeight();
  const [errors, setErrors] = useState<DietProfileFieldErrors>({});

  // Floor the target at a BMI of 18.5 for the entered height rather than 0.
  const healthyFloor =
    height !== null ? minHealthyWeight(height) : BOUNDS.desiredWeight.min;

  const targetMin =
    action === "gain" ? Math.max(weight ?? healthyFloor, healthyFloor) : healthyFloor;
  const targetMax =
    action === "gain" ? BOUNDS.desiredWeight.max : weight ?? BOUNDS.desiredWeight.max;

  const errorMessages = Object.values(errors).filter(Boolean);

  const saveUserData = async (formData: FormData) => {
    const result = await saveDietProfile(formData);

    if (result.success) {
      setErrors({});
      onSave();
      return;
    }

    // Stay on this step so the user can correct the values.
    setErrors(result.errors);
  };

  return (
    <div className={styles.manageWeightMain}>
      <div className={styles.mainContainer}>
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
            <span>{tdee}</span> cal!
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
              <div className={styles.inputContainer}>
                <input
                  type="number"
                  id="desiredWeight"
                  name="desiredWeight"
                  value={desiredWeight ?? ""}
                  onChange={(e) => setDesiredWeight(Number(e.target.value))}
                  placeholder="0"
                  min={targetMin}
                  max={targetMax}
                  aria-invalid={errors.desiredWeight ? true : undefined}
                  required
                />
                <h3 className={styles.unit}>kg</h3>
              </div>
            </div>
          </div>

          {errorMessages.length > 0 && (
            <ul className={styles.formErrors} role="alert">
              {errorMessages.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          )}

          <div className={styles.calculateMakro}>
            <button disabled={!action || !desiredWeight} type="submit" id="macro-button">
              Show my makro needs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesiredWeight;
