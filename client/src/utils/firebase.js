
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiqai-c3fa2.firebaseapp.com",
  projectId: "interviewiqai-c3fa2",
  storageBucket: "interviewiqai-c3fa2.firebasestorage.app",
  messagingSenderId: "656827263263",
  appId: "1:656827263263:web:48d168ccb313f97468682a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };