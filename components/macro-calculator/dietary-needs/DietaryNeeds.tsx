"use client";
import styles from "./dietaryNeeds.module.scss";
import { useWeight } from "@/components/macro-calculator/WeightContext";

interface Props {
  onSave: () => void;
}

const DietaryNeeds = ({ onSave }: Props) => {
  const {
    gender,
    setGender,
    weight,
    setWeight,
    height,
    setHeight,
    age,
    setAge,
    activity,
    setActivity,
  } = useWeight();

  const isFormValid =
    gender !== null &&
    weight !== null &&
    height !== null &&
    age !== null &&
    activity !== null;

  const saveUserData = async () => {
    onSave();
  };

  return (
    <div className={styles.manageWeightMain}>
      <div className={styles.mainHeaderText} id="dietaryNeedsContainer">
        <h2>
          <span>Introduce</span> your data
        </h2>
        <h3>To calculate your dietary needs</h3>
      </div>

      <form className={styles.mainContent} action={saveUserData}>
        {/* GENDER */}
        <div className={styles.genderBox}>
          <h3>
            <span>Gender</span>
          </h3>
          <div className={styles.genderContainer}>
            <div>
              <input
                className={styles.maleInput}
                type="radio"
                id="male"
                name="gender"
                value={5}
                checked={gender === 5}
                onChange={(e) => setGender(Number(e.target.value))}
                required
              />
              <label className={styles.male} htmlFor="male">
                <i className="fas fa-male"></i>
                <div className={styles.textBox}>
                  <h3>I am</h3>
                  <h2>male</h2>
                </div>
              </label>
            </div>

            <div>
              <input
                className={styles.femaleInput}
                type="radio"
                id="female"
                name="gender"
                value={-161}
                checked={gender === -161}
                onChange={(e) => setGender(Number(e.target.value))}
              />
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

        {/* WEIGHT / HEIGHT / AGE */}
        <div className={styles.weightHeightAgeContainer}>
          <div className={styles.weight}>
            <h3>
              <span>Weight</span>
            </h3>
            <div className={styles.inputContainer}>
              <input
                type="number"
                name="weight"
                placeholder="0"
                min="0"
                max="300"
                value={weight ?? ""}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                required
              />
              <h3 className={styles.unit}>kg</h3>
            </div>
          </div>

          <div className={styles.height}>
            <h3>
              <span>Height</span>
            </h3>
            <div className={styles.inputContainer}>
              <input
                type="number"
                name="height"
                placeholder="0"
                min="0"
                max="300"
                value={height ?? ""}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
                required
              />
              <h3 className={styles.unit}>cm</h3>
            </div>
          </div>

          <div className={styles.age}>
            <h3>
              <span>Age</span>
            </h3>
            <div className={styles.inputContainer}>
              <input
                type="number"
                name="age"
                placeholder="0"
                min="0"
                max="130"
                value={age ?? ""}
                onChange={(e) => setAge(Number(e.target.value))}
                required
              />
              <h3 className={styles.unit}>years</h3>
            </div>
          </div>
        </div>

        {/* ACTIVITY */}
        <div className={styles.activityLevel}>
          <h3>
            <span>Activity level</span>
          </h3>
          <div className={styles.activityOptionsContainer}>
            {[
              { id: "sedentary", val: 1.2 },
              { id: "lightly-active", val: 1.375 },
              { id: "moderately-active", val: 1.55 },
              { id: "very-active", val: 1.725 },
              { id: "extra-active", val: 1.9 },
            ].map((item) => (
              <label
                key={item.id}
                className={styles.container}
                htmlFor={item.id}
              >
                <input
                  type="radio"
                  id={item.id}
                  name="activity"
                  value={item.val}
                  checked={activity === item.val}
                  onChange={(e) => setActivity(Number(e.target.value))}
                  required
                />
                <span className={styles.checkmark}></span>
              </label>
            ))}
          </div>

          <div className={styles.labelText}>
            <h4>sedentary</h4>
            <h4>extra active</h4>
          </div>
        </div>

        {/* SUBMIT (Disabled until valid) */}
        <div className={styles.calculateCalories}>
          <button disabled={!isFormValid} type="submit">
            Calculate calorie intake
          </button>
        </div>
      </form>
    </div>
  );
};

export default DietaryNeeds;
