'use server';
import { verifyAuth } from '@/lib/auth';
import { getMacros, saveMacros } from '@/lib/macros';
import { dietProfileSchema } from '@/lib/dietaryProfileSchema';
import type { DietProfileFieldErrors } from '@/lib/dietaryProfile';

export type SaveDietProfileResult =
  | { success: true }
  | { success: false; errors: DietProfileFieldErrors };

export async function getDietProfile() {
  const { session, user } = await verifyAuth();
  if (!session || !user) return null;

  const result = await getMacros(user.id);
  if (!result) return null;

  return JSON.parse(JSON.stringify(result));
}

export async function saveDietProfile(
  formData: FormData
): Promise<SaveDietProfileResult> {
  const { session, user } = await verifyAuth();
  if (!session || !user) {
    return {
      success: false,
      errors: { form: 'Your session has expired. Please log in again.' },
    };
  }

  const parsed = dietProfileSchema.safeParse({
    gender: formData.get('gender'),
    weight: formData.get('weight'),
    height: formData.get('height'),
    age: formData.get('age'),
    activity: formData.get('activity'),
    action: formData.get('action'),
    desiredWeight: formData.get('desiredWeight'),
  });

  if (!parsed.success) {
    // Keep the first issue per field; later ones are usually noise from the
    // same bad value.
    const errors: DietProfileFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof DietProfileFieldErrors | undefined;
      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }
    return { success: false, errors };
  }

  await saveMacros(user.id, parsed.data);

  return { success: true };
}
