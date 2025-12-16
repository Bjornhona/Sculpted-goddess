'use server';
import { createUser, getUserByEmail } from '../lib/user';
import { hashUserPassword, verifyPassword } from '../lib/hash';
import { createAuthSession, destroyAuthSession } from '../lib/auth';
import { redirect } from 'next/navigation';

export const signup = async (prevState, formData) => { // by default a form allways sends prevState and formData.
  const email = formData.get('email'); // the asigned name in the auth-form.
  const password = formData.get('password');
  const confirmation = formData.get('confirmation');

  // 1) Validate email and password, return if any errors.
  let errors = {};
  if (!email.includes('@') || !email.includes('.')) {
    errors.email = 'Please enter a valid email address.';
  }
  if (password.trim().length < 5) {
    errors.password = 'Password must be at least 5 characters long.';
  }
  if (confirmation !== password) {
    errors.confirmation = 'The passwords do not match.';
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // 2) Store it in the database (create new user)
  const hashedPassword = hashUserPassword(password);
  try {
    const userId = await createUser(email, hashedPassword);
    await createAuthSession(userId);
    // 3) Return success state instead of redirecting
    return { success: true };
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT' && error.message.includes('UNIQUE constraint failed')) {
      errors.email = 'Email is already in use.';
      return { errors };
    }
    throw error;
  }
};

export const login = async (prevState, formData) => {
  const email = formData.get('email'); // the assigned name in the auth-form.
  const password = formData.get('password');
  const errorMessage = 'Could not authenticate user, please check your credentials.';

  // 1) Validate email and password, return if any errors.
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { errors: { email: errorMessage } };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return { errors: { password: errorMessage} };
  }

  // 2) Create session and redirect to training page
  await createAuthSession(existingUser.id);
  return { success: true };
}

export const logout = async () => {
  await destroyAuthSession();
  redirect('/');
};
