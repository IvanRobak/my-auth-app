'use client';

import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth } from "../firebase/config";
import Cookies from 'js-cookie';

interface AuthError {
  code: string;
  message: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        Cookies.set('auth', 'true', { expires: 7 }); // Cookie expires in 7 days
      } else {
        Cookies.remove('auth');
      }
    });

    return unsubscribe;
  }, []);

  const register = async (email: string, password: string) => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err as AuthError);
      throw err;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
      setError(err as AuthError);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      Cookies.remove('auth');
    } catch (err) {
      setError(err as AuthError);
      throw err;
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      setError(null);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err as AuthError);
      throw err;
    }
  };

  const resetPassword = async (oobCode: string, newPassword: string) => {
    try {
      setError(null);
      await confirmPasswordReset(auth, oobCode, newPassword);
    } catch (err) {
      setError(err as AuthError);
      throw err;
    }
  };

  return {
    user,
    loading,
    error,
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
  };
};