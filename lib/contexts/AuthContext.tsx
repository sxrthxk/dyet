import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  Auth,
  signOut,
} from "firebase/auth";
import { auth } from "config/firebaseConfig";
import { useRouter } from "next/dist/client/router";

const provider = new GoogleAuthProvider();

type AuthContextValues = {
  GAuthHandler: () => void;
  auth: Auth;
  isUser: "loading" | "yes" | "no";
  signOutHandler: () => void;
};

const AuthContextDefaults = {
  GAuthHandler: () => {},
  auth,
  isUser: "loading",
  signOutHandler: () => {},
};
const AuthContext = React.createContext(AuthContextDefaults);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [isUser, setIsUser] = useState<"loading" | "no" | "yes">("loading");

  const router = useRouter();

  const GAuthHandler = async () => {
    setIsUser("loading");
    await signInWithRedirect(auth, provider);
  };

  const signOutHandler = async () => {
    setIsUser("loading");
    await signOut(auth);
  };

  const requireAuth = () => {
    if (isUser === "no") {
      typeof window === "undefined" && router.push("/auth");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUser("yes");
      } else {
        setIsUser("no");
      }
    });
    return unsubscribe;
  }, []);

  const value: AuthContextValues = {
    GAuthHandler,
    auth,
    isUser,
    signOutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
