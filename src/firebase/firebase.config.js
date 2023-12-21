// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7JFswhShajwpFeXVpr9b2n7FUvu8zJW8",
  authDomain: "task-nestle.firebaseapp.com",
  projectId: "task-nestle",
  storageBucket: "task-nestle.appspot.com",
  messagingSenderId: "141843765711",
  appId: "1:141843765711:web:93eb1effb157629d241aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;