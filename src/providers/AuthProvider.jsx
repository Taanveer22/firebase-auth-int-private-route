import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // =======object literal syntax shorthand examples========
  const topic = "context api";
  const isHard = true;
  const version = 19;
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // const info = {
  //   topic: topic,
  //   isHard: isHard,
  //   version: version,
  //   createUser : createUser,
  // };

  const info = {
    topic,
    isHard,
    version,
    createUser,
  };
  console.log(info);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
