import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDCfyYuDzel3LpWuwpu5zYf7ndDMvP7koM",
  authDomain: "todo-itf-first.firebaseapp.com",
  projectId: "todo-itf-first",
  storageBucket: "todo-itf-first.appspot.com",
  messagingSenderId: "461975504818",
  appId: "1:461975504818:web:3e6af7a04df3949a4b86ab"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provier = new GoogleAuthProvider()
const db = getFirestore(app);

export {auth, provier, db};
