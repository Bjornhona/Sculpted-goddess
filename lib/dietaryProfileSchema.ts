import { z } from "zod";
import {
  ACTION_VALUES,
  ACTIVITY_VALUES,
  BOUNDS,
  GENDER,
  minHealthyWeight,
  type DietProfileField,
} from "./dietaryProfile";

const bounded = (label: string, { min, max }: { min: number; max: number }) =>
  z.coerce
    .number({ error: `${label} must be a number.` })
    .min(min, { error: `${label} must be between ${min} and ${max}.` })
    .max(max, { error: `${label} must be between ${min} and ${max}.` });

export const dietProfileSchema = z
  .object({
    gender: z.coerce
      .number()
      .pipe(z.literal([GENDER.male, GENDER.female], { error: "Select a gender." })),
    weight: bounded("Weight", BOUNDS.weight),
    height: bounded("Height", BOUNDS.height),
    age: bounded("Age", BOUNDS.age).int({ error: "Age must be a whole number." }),
    activity: z.coerce
      .number()
      .pipe(z.literal(ACTIVITY_VALUES, { error: "Select an activity level." })),
    action: z.enum(ACTION_VALUES, {
      error: "Choose whether you want to lose weight or gain muscle.",
    }),
    desiredWeight: bounded("Desired weight", BOUNDS.desiredWeight),
  })
  .superRefine((data, ctx) => {
    const floor = minHealthyWeight(data.height);
    if (data.desiredWeight < floor) {
      ctx.addIssue({
        code: "custom",
        path: ["desiredWeight"],
        message: `At ${data.height} cm, the lowest healthy target is ${floor} kg (BMI 18.5).`,
      });
      return;
    }

    if (data.action === "lose" && data.desiredWeight > data.weight) {
      ctx.addIssue({
        code: "custom",
        path: ["desiredWeight"],
        message: "To lose weight, your target must be below your current weight.",
      });
    }

    if (data.action === "gain" && data.desiredWeight < data.weight) {
      ctx.addIssue({
        code: "custom",
        path: ["desiredWeight"],
        message: "To gain muscle, your target must be above your current weight.",
      });
    }
  });

export type DietProfileInput = z.infer<typeof dietProfileSchema>;

type Equals<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

// Compile-time guard: if the schema gains or loses a field without
// DIET_PROFILE_FIELDS being updated to match, this stops type-checking.
const fieldsInSync: Equals<keyof DietProfileInput, DietProfileField> = true;
void fieldsInSync;
