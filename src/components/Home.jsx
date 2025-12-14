import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const { signInWithGithub, user } = useContext(AuthContext);
  console.log(signInWithGithub, user);

  const handleGithubLogin = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Welcome to this website homepage</h1>
      <button onClick={handleGithubLogin} className="btn btn-accent">
        Login with github
      </button>
      <p>{user?.displayName}</p>
      <img src={user?.photoURL} className="w-40"></img>
    </div>
  );
};

export default Home;
