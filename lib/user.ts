import db from './db';
import crypto from 'node:crypto';

export const createUser = async (email: string, password: string) => {
  const userId = crypto.randomUUID();
  const result = await db.execute({
    sql: 'INSERT INTO users (id, email, password) VALUES (?, ?, ?)',
    args: [userId, email, password],
  });
  return userId;
}

export const getUserByEmail = async (email: string) => {
  const result = await db.execute({
    sql: 'SELECT * FROM users WHERE email=?',
    args: [email],
  });
  return result.rows[0] || null;
}
