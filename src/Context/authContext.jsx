import { useState, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { app } from "../FirebaseConfig/init";

export const auth = getAuth(app);

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const registerUser = (email, password, role) =>
    createUserWithEmailAndPassword(auth, email, password, role);
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <userContext.Provider value={{ user, setUser, registerUser, loginUser }}>
      {children}
    </userContext.Provider>
  );
};
export const singOutUser = () => signOut(auth);
