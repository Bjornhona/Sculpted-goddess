import {cookies} from 'next/headers';
import {Lucia} from 'lucia';
import {TursoAdapter} from './luciaAdapter';

const lucia = new Lucia(TursoAdapter(), {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production'
    }
  }
});

export const createAuthSession = async (userId: string) => {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}

export const verifyAuth = async () => {
  const emptyUserSession = {
    user: null,
    session: null
  };
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie) {
    return emptyUserSession;
  }

  const sessionId = sessionCookie.value;
  if (!sessionId) {
    return emptyUserSession;
  }

  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {};

  return result;
}

export const destroyAuthSession = async () => {
  const {session} = await verifyAuth();
  if (!session) {
    return { error: 'Unauthorized!'}
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}
