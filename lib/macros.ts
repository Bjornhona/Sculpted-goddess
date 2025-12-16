import db from "./db";

export const getMacros = async (userId: string) => {
  const result = await db.execute({
    sql: `SELECT * FROM dietary_profiles WHERE user_id = ? ORDER BY created_at DESC LIMIT 1`,
    args: [userId],
  });
  return result.rows?.[0] || null;
};

export async function saveMacros(userId: string, data: any) {
  // Remove previous entry so each user only has one profile
  await db.execute({
    sql: `DELETE FROM dietary_profiles WHERE user_id = ?`,
    args: [userId],
  });

  await db.execute({
    sql: `
      INSERT INTO dietary_profiles 
      (user_id, gender, weight, height, age, activity, desired_weight, action)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    args: [
      userId,
      data.gender,
      data.weight,
      data.height,
      data.age,
      data.activity,
      data.desired_weight,
      data.action
    ]
  });
}
