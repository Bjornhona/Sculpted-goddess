/**
 * Shared constants for the dietary profile.
 *
 * Deliberately free of any zod import: the client inputs read BOUNDS and
 * minHealthyWeight from here, so pulling the schema in would ship the whole
 * validation library to the browser for a handful of numbers. The schema lives
 * in ./dietaryProfileSchema and is server-only.
 */

/**
 * Mifflin-St Jeor sex constants. The stored value *is* the coefficient added to
 * the BMR equation, so the DB column holds 5 / -161 rather than a label.
 */
export const GENDER = { male: 5, female: -161 } as const;

/** Standard activity multipliers, sedentary through extra active. */
export const ACTIVITY_VALUES = [1.2, 1.375, 1.55, 1.725, 1.9] as const;

export const ACTION_VALUES = ["lose", "gain"] as const;

/**
 * Single source of truth for the numeric ranges. Imported by both the zod
 * schema and the client inputs, so the two cannot drift apart.
 */
export const BOUNDS = {
  weight: { min: 30, max: 300 },
  height: { min: 100, max: 250 },
  age: { min: 18, max: 100 },
  desiredWeight: { min: 30, max: 300 },
} as const;

/**
 * Lowest weight that still puts BMI at or above 18.5 for a given height, which
 * is the floor of the "normal" BMI band. Never returns less than the schema
 * minimum, so a client input using this can never undershoot the server.
 */
export const minHealthyWeight = (heightCm: number) =>
  Math.max(BOUNDS.desiredWeight.min, Math.ceil(18.5 * (heightCm / 100) ** 2));

export const DIET_PROFILE_FIELDS = [
  "gender",
  "weight",
  "height",
  "age",
  "activity",
  "action",
  "desiredWeight",
] as const;

export type DietProfileField = (typeof DIET_PROFILE_FIELDS)[number];

/** `form` carries errors that belong to the submission as a whole, not a field. */
export type DietProfileFieldErrors = Partial<
  Record<DietProfileField | "form", string>
>;
