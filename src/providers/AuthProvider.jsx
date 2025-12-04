import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  // =======object literal syntax shorthand examples========
  const topic = "context api";
  const isHard = true;
  const version = 19;
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("currently logged user", currentUser);
      setUser(currentUser);
    } else {
      console.log("no logged user");
      setUser(null);
    }
  });

  // const info = {
  //   topic: topic,
  //   isHard: isHard,
  //   version: version,
  //   createUser : createUser,
  //   signInUser : signInUser,
  //   user : user,
  // };

  const info = {
    topic,
    isHard,
    version,
    createUser,
    signInUser,
    user,
  };
  console.log(info);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
