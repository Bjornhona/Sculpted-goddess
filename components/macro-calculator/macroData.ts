import { WeightContextType } from "@/components/macro-calculator/WeightContext";

export interface MacroData {
  title: string;
  value: number | null;
  circumference: number;
  offset: number;
  unit: string;
  resultTitle: string;
  result: string | null;
}

export interface MacroGoals {
  nutrient: string;
  percentage: number | null;
}

export const getMacroData = (data: WeightContextType) => {
  const {
    bmi,
    bmiResult,
    recommendedCalIntake,
    desiredWeight,
    milestoneWeight,
    bmiPercent,
    calPercent,
    milestonePercent,
  } = data;
  const radius = 90; // px
  const circumference = 2 * Math.PI * radius;
  const bmiOffset =
    circumference - (bmiPercent ? bmiPercent / 100 : 0) * circumference;
  const calOffset =
    circumference - (calPercent ? calPercent / 100 : 0) * circumference;
  const milestoneOffset =
    circumference -
    (milestonePercent ? milestonePercent / 100 : 0) * circumference;

  return [
    {
      title: "Body Mass Index (BMI)",
      value: bmi,
      circumference: circumference,
      offset: bmiOffset,
      unit: "kg/m2",
      resultTitle: "Your BMI:",
      result: bmiResult,
    },
    {
      title: "Calorie intake (per day)",
      value: recommendedCalIntake,
      circumference: circumference,
      offset: calOffset,
      unit: "Calories",
      resultTitle: "To reach final weight:",
      result: `${desiredWeight} kg`,
    },
    {
      title: "30 Day Milestone",
      value: milestoneWeight ? milestoneWeight : null,
      circumference: circumference,
      offset: milestoneOffset,
      unit: "kg",
      resultTitle: "To reach milestone:",
      result: `${milestoneWeight} kg`,
    },
  ];
};

export const getMacroGoals = (data: WeightContextType) => {
  const { carbs, prot, fat, carbsPercent, protPercent, fatPercent } = data;
  return [
    {
      nutrient: `Carbs - ${carbs} g`,
      percentage: carbsPercent,
    },
    {
      nutrient: `Proteins - ${prot} g`,
      percentage: protPercent,
    },
    {
      nutrient: `Fats - ${fat} g`,
      percentage: fatPercent,
    },
  ];
};
