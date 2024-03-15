"use client";

import "@/config/firebase";

import type { User } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIslogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setloggedInUser] = useState<User | undefined>(undefined);

  const provider = new GoogleAuthProvider();
  const fProvider = new FacebookAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      if (user_) {
        setloggedInUser(user_);
      } else {
        setloggedInUser(undefined);
      }
    });
  }, [auth]);

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const token = credential.accessToken;

      console.log({ user: result.user, token });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const facebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, fProvider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const token = credential.accessToken;

      console.log({ user: result.user, token });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const EmailPasswordSignIn = async () => {
    // TODO: validate ?
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const token = "custom token?";

      console.log({ user: credential.user, token });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const EmailPasswordSignUp = async () => {
    // TODO: validate
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) return;
      const token = "custom token?";

      console.log({ user: credential.user, token });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      const result = await signOut(auth);
      console.log(result);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {loggedInUser ? (
        <>
          <div>Hello, {loggedInUser.displayName || loggedInUser.email}</div>
          <button onClick={() => logout()}>logout</button>
        </>
      ) : (
        <>
          <div className="py-5 text-lg font-bold uppercase">
            {isLogin ? "sign in" : "sign up"}
          </div>
          <div className="grid grid-cols-[80px_auto] items-center gap-3">
            <label htmlFor="email">email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="col-span-2"
            onClick={() =>
              isLogin ? EmailPasswordSignIn() : EmailPasswordSignUp()
            }
          >
            submit
          </button>
          {
            <div
              className="cursor-pointer underline"
              onClick={() => setIslogin((prev) => !prev)}
            >
              {isLogin ? "sign up with email" : "back to sign in"}
            </div>
          }
          <button onClick={() => googleSignIn()}>
            {isLogin ? "sign in" : "sign up"} with google
          </button>
          <button onClick={() => facebookSignIn()}>
            {isLogin ? "sign in" : "sign up"} with facebook
          </button>
        </>
      )}
    </div>
  );
}
