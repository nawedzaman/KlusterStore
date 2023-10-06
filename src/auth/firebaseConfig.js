
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTfB_gucDUYikM5ue6IQU2mSAiGDC0_Zc",
  authDomain: "klusterstore.firebaseapp.com",
  projectId: "klusterstore",
  storageBucket: "klusterstore.appspot.com",
  messagingSenderId: "136333516538",
  appId: "1:136333516538:web:769be81d6a9e46956e7343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebase = getAuth(app)