import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  Auth,
} from "firebase/auth";
import { auth } from "config/firebaseConfig";

const provider = new GoogleAuthProvider();

type AuthContextValues = {
  GAuthHandler: () => void;
  auth: Auth;
  isUser: "loading" | "yes" | "no";
};

const AuthContextDefaults = {
  GAuthHandler: () => {},
  auth,
  isUser: "loading"
};
const AuthContext = React.createContext(AuthContextDefaults);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider: React.FC = ({ children }) => {
  const [isUser, setIsUser] = useState<"loading" | "no" | "yes">("loading");

  const GAuthHandler = async () => {
    await signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        setIsUser("yes")
      } else {
        setIsUser("no")
      }
    });
    return unsubscribe;
  }, []);

  const value: AuthContextValues = {
    GAuthHandler,
    auth,
    isUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
