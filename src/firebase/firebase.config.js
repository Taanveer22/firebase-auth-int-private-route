// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAng3kLMNN1RcILdlLuHRR1vNtDVDbxPMA",
  authDomain: "auth-int-private-route-47388.firebaseapp.com",
  projectId: "auth-int-private-route-47388",
  storageBucket: "auth-int-private-route-47388.firebasestorage.app",
  messagingSenderId: "189283823446",
  appId: "1:189283823446:web:cb4f2ca19a1af2aff0b0f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
