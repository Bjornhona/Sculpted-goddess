'use server';
import { verifyAuth } from '@/lib/auth';
import { getMacros, saveMacros } from '@/lib/macros';

export interface DietProfile {
  gender: number;
  weight: number;
  height: number;
  age: number;
  activity: number;
  desired_weight: number;
  action: string;
}

export async function getDietProfile() {
  const { session, user } = await verifyAuth();
  if (!session) return null;

  const result = await getMacros(user.id);
  if (!result) return null;

  return JSON.parse(JSON.stringify(result));
}

export async function saveDietProfile(formData: FormData) {
  const { session, user } = await verifyAuth();
  if (!session) return null;

  const userId = user.id;

  const data = {
    gender: Number(formData.get("gender")),
    weight: Number(formData.get("weight")),
    height: Number(formData.get("height")),
    age: Number(formData.get("age")),
    activity: Number(formData.get("activity")),
    desired_weight: Number(formData.get("desiredWeight")),
    action: String(formData.get("action")),
  };

  await saveMacros(userId, data);

  return { success: true };
}
