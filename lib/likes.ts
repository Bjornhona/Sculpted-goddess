import db from './db';

// Return array of recipe IDs that user has liked
export async function getUserLikes(userId: string) {
  const result = await db.execute({
    sql: `SELECT recipe_id FROM likes WHERE user_id = ?`,
    args: [userId],
  });

  return result.rows.map((row: any) => row.recipe_id);
}

// Add a like
export async function likeRecipe(userId: string, recipeId: string) {
  await db.execute({
    sql: `INSERT INTO likes (user_id, recipe_id) VALUES (?, ?)`,
    args: [userId, recipeId],
  });
}

// Remove a like
export async function unlikeRecipe(userId: string, recipeId: string) {
  await db.execute({
    sql: `DELETE FROM likes WHERE user_id = ? AND recipe_id = ?`,
    args: [userId, recipeId],
  });
}

// Toggle like/unlike
export async function toggleLike(userId: string, recipeId: string) {
  const result = await db.execute({
    sql: `SELECT 1 FROM likes WHERE user_id = ? AND recipe_id = ?`,
    args: [userId, recipeId],
  });

  const exists = result.rows.length > 0;

  if (exists) {
    await unlikeRecipe(userId, recipeId);
    return { liked: false };
  }

  await likeRecipe(userId, recipeId);
  return { liked: true };
}
