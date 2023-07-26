// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDCWnqSBvYv2VrTyCH4aofudOMNqwxR_aU",
  authDomain: "netflix-project-4f921.firebaseapp.com",
  projectId: "netflix-project-4f921",
  storageBucket: "netflix-project-4f921.appspot.com",
  messagingSenderId: "867483498131",
  appId: "1:867483498131:web:2a01031f436190fbcd7f66",
  measurementId: "G-NFF0PFFTDJ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)