// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "team-collaboration-app-ba9e6.firebaseapp.com",
  projectId: "team-collaboration-app-ba9e6",
  storageBucket: "team-collaboration-app-ba9e6.appspot.com",
  messagingSenderId: "7585884643",
  appId: "1:7585884643:web:9d515c4630b6c8367298d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db=getFireStore(app)