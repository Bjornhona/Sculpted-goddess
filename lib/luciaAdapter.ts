import db from './db';

interface User {
  id: string;
  email: string;
  password: string;
  attributes: Record<string, any>;
}
interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  attributes: Record<string, any>;
}

export const TursoAdapter = () => {
  return {
    getUser: async (userId: string): Promise<User | null> => {
      const res = await db.execute({
        sql: 'SELECT * FROM users WHERE id = ?',
        args: [userId],
      });
      if (res.rows.length === 0) return null;
      return res.rows[0] as unknown as User; // <-- cast through unknown
    },

    getUserByEmail: async (email: string): Promise<User | null> => {
      const res = await db.execute({
        sql: 'SELECT * FROM users WHERE email = ?',
        args: [email],
      });
      if (res.rows.length === 0) return null;
      return res.rows[0] as unknown as User; // <-- cast through unknown
    },

    setUser: async (user: User): Promise<void> => {
      await db.execute({
        sql: 'INSERT INTO users (id, email, password) VALUES (?, ?, ?)',
        args: [user.id, user.email, user.password],
      });
    },

    deleteUser: async (userId: string): Promise<void> => {
      await db.execute({
        sql: 'DELETE FROM users WHERE id = ?',
        args: [userId],
      });
    },

    getSession: async (sessionId: string): Promise<Session | null> => {
      const res = await db.execute({
        sql: 'SELECT * FROM sessions WHERE id = ?',
        args: [sessionId],
      });
      if (res.rows.length === 0) return null;
      return res.rows[0] as unknown as Session; // <-- cast through unknown
    },

    setSession: async (session: Session): Promise<void> => {
      const timestamp = Math.floor(session.expiresAt.getTime() / 1000);
      await db.execute({
        sql: 'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)',
        args: [session.id, session.userId, timestamp],
      });
    },

    deleteSession: async (sessionId: string): Promise<void> => {
      await db.execute({
        sql: 'DELETE FROM sessions WHERE id = ?',
        args: [sessionId],
      });
    },

    updateUserPassword: async (userId: string, hashedPassword: string): Promise<void> => {
      await db.execute({
        sql: 'UPDATE users SET password = ? WHERE id = ?',
        args: [hashedPassword, userId],
      });
    },

    getSessionAndUser: async (
      sessionId: string
    ): Promise<[Session | null, User | null]> => {
      const res = await db.execute({
        sql: `
          SELECT 
            s.id AS session_id,
            s.user_id AS session_userId,
            s.expires_at AS session_expiresAt,
            u.id AS user_id,
            u.email,
            u.password
          FROM sessions s
          JOIN users u ON s.user_id = u.id
          WHERE s.id = ?
        `,
        args: [sessionId],
      });
    
      if (res.rows.length === 0) return [null, null];
    
      const row = res.rows[0] as unknown as any;
    
      const session: Session = {
        id: row.session_id,
        userId: row.session_userId,
        expiresAt: row.session_expiresAt
          ? new Date(row.session_expiresAt * 1000)
          : new Date(),
        attributes: {}, // must always be defined
      };
    
      const user: User = {
        id: row.user_id,
        email: row.email,
        password: row.password,
        attributes: {}, // must always be defined
      };
    
      return [session, user];
    },

    getUserSessions: async (userId: string) => {
      const res = await db.execute({
        sql: `SELECT * FROM sessions WHERE user_id = ?`,
        args: [userId],
      });
      return res.rows.map((row) => row as unknown as Session);
    },

    updateSessionExpiration: async (sessionId: string, expiresAt: Date) => {
      const timestamp = Math.floor(expiresAt.getTime() / 1000);

      await db.execute({
        sql: `UPDATE sessions SET expires_at = ? WHERE id = ?`,
        args: [timestamp, sessionId],
      });
    },

    deleteUserSessions: async (userId: string) => {
      await db.execute({
        sql: `DELETE FROM sessions WHERE user_id = ?`,
        args: [userId],
      });
    },

    deleteExpiredSessions: async () => {
      await db.execute({
        sql: `DELETE FROM sessions WHERE expires_at <= strftime('%s','now')`,
        args: [],
      });
    },
  };
};
