import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// ===========    context create    ===============
const AuthContext = createContext(null);

// ======= provider component =================
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // object literal syntax shorthand examples
  const topic = "context api";
  const isHard = true;
  const version = 19;

  // ========= create user ==============
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ========= sign in user ==============
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // =============== sign out user ==================
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ========== listen to auth changes (method 01) =================

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("currently logged user", currentUser);
  //     setUser(currentUser);
  //   } else {
  //     console.log("no logged user");
  //     setUser(null);
  //   }
  // });

  // ========== listen to auth changes (method 02) =================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // ========== memorized context value (method 01) ===================
  // const authInfo = {
  //   topic: topic,
  //   isHard: isHard,
  //   version: version,
  //   createUser: createUser,
  //   signInUser: signInUser,
  //   signOutUser: signOutUser,
  //   user: user,
  //   loading: loading,
  // };

  // ========== memorized context value (method 02) ===================
  const authInfo = {
    topic,
    isHard,
    version,
    createUser,
    signInUser,
    signOutUser,
    user,
    loading,
  };
  console.log(authInfo);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
