"use client";
import { createContext, useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface WeightContextType {
  // Raw data
  gender: number | null;
  setGender: Dispatch<SetStateAction<number | null>>;
  weight: number | null;
  setWeight: Dispatch<SetStateAction<number | null>>;
  height: number | null;
  setHeight: Dispatch<SetStateAction<number | null>>;
  age: number | null;
  setAge: Dispatch<SetStateAction<number | null>>;
  activity: number | null;
  setActivity: Dispatch<SetStateAction<number | null>>;
  desiredWeight: number | null;
  setDesiredWeight: Dispatch<SetStateAction<number | null>>;
  action: string | null;
  setAction: Dispatch<SetStateAction<string | null>>;

  // Calculated
  bmi: number | null;
  bmiResult: string | null;
  tdee: number | null;
  recommendedCalIntake: number | null;
  carbs: number | null;
  prot: number | null;
  fat: number | null;
  milestoneWeight: number | null;
  bmiPercent: number | null;
  calPercent: number | null;
  milestonePercent: number | null;
  carbsPercent: number | null;
  protPercent: number | null;
  fatPercent: number | null;
}

const WeightContext = createContext<WeightContextType>(null!);

interface WeightProviderProps {
  children: React.ReactNode;
  initialValues?: {
    gender?: -161 | 5 | null;
    weight?: number | null;
    height?: number | null;
    age?: number | null;
    activity?: 1.2 | 1.375 | 1.55 | 1.725 | 1.9 | null;
    desiredWeight?: number | null;
    action: "lose" | "gain" | null;
  };
}

export function WeightProvider({ children, initialValues }: WeightProviderProps) {
  const [gender, setGender] = useState<number | null>(initialValues?.gender ?? null);
  const [weight, setWeight] = useState<number | null>(initialValues?.weight ?? null);
  const [height, setHeight] = useState<number | null>(initialValues?.height ?? null);
  const [age, setAge] = useState<number | null>(initialValues?.age ?? null);
  const [activity, setActivity] = useState<number | null>(initialValues?.activity ?? null);
  const [desiredWeight, setDesiredWeight] = useState<number | null>(initialValues?.desiredWeight ?? null);
  const [action, setAction] = useState<string | null>(initialValues?.action ?? null);

  // --- Derived metrics ---
  const bmi =
    weight !== null && height !== null ? Number((weight / (height / 100) ** 2).toFixed(1)) : null;

  const bmiResult = bmi
    ? bmi < 18.5
      ? "Underweight"
      : bmi < 25
      ? "Normal"
      : bmi < 30
      ? "Overweight"
      : "Obese"
    : null;

  // Mifflin-St Jeor BMR
  const bmr =
    gender !== null && weight !== null && height !== null && age !== null
      ? gender === 5
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161
      : null;

  const tdee =
    bmr !== null && activity !== null ? Math.round(bmr * activity) : null;

  const recommendedCalIntake = (() => {
    if (tdee === null || action === null) return null;
  
    let calories = tdee;
  
    if (action === "lose") {
      calories -= 500; // safe, sustainable deficit
    }
  
    if (action === "gain") {
      calories += 300; // lean muscle gain
    }
  
    // Safety floor
    if (gender === -161 && calories < 1200) calories = 1200; // female
    if (gender === 5 && calories < 1500) calories = 1500; // male
  
    return Math.round(calories);
  })();

  // Macros (40/30/30)
  const carbs = recommendedCalIntake
    ? Math.round((recommendedCalIntake * 0.4) / 4)
    : null;
  const prot = recommendedCalIntake
    ? Math.round((recommendedCalIntake * 0.3) / 4)
    : null;
  const fat = recommendedCalIntake
    ? Math.round((recommendedCalIntake * 0.3) / 9)
    : null;

  // 30-day milestone. A sustainable rate is 0.5–1 kg/week, so over ~4.3 weeks
  // the projected change is capped at 4 kg. Goals closer than that are reached
  // inside the 30 days, in which case the milestone is simply the goal.
  const MAX_30_DAY_CHANGE_KG = 4;

  const milestoneWeight = (() => {
    if (weight === null || desiredWeight === null) return null;

    const remaining = desiredWeight - weight;
    const step =
      Math.sign(remaining) * Math.min(Math.abs(remaining), MAX_30_DAY_CHANGE_KG);

    return Number((weight + step).toFixed(1));
  })();

  const milestonePercent =
    weight !== null && desiredWeight !== null && milestoneWeight !== null && weight !== desiredWeight
      ? Math.min(
          (Math.abs(milestoneWeight - weight) / Math.abs(desiredWeight - weight)) * 100,
          100
        )
      : 0;

  const bmiPercent = bmi ? Math.min((bmi / 40) * 100, 100) : 0;

  const calPercent = recommendedCalIntake
    ? Math.min((recommendedCalIntake / 3000) * 100, 100)
    : 0;

  const carbsPercent = carbs && prot && fat ? Math.min((carbs / (carbs + prot + fat)) * 100, 100) : 0;
  const protPercent = prot && carbs && fat ? Math.min((prot / (carbs + prot + fat)) * 100, 100) : 0;
  const fatPercent = fat && carbs && prot ? Math.min((fat / (carbs + prot + fat)) * 100, 100) : 0;

  return (
    <WeightContext.Provider
      value={{
        // Raw data
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
        desiredWeight,
        setDesiredWeight,
        action,
        setAction,

        // Calculated
        bmi,
        bmiResult,
        tdee,
        recommendedCalIntake,
        carbs,
        prot,
        fat,
        milestoneWeight,
        milestonePercent,
        bmiPercent,
        calPercent,
        carbsPercent,
        protPercent,
        fatPercent,
      }}
    >
      {children}
    </WeightContext.Provider>
  );
}

export function useWeight() {
  return useContext(WeightContext);
}
