// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnaFRqleoDNpz61gbFyTuuuWLLra1QJU4",
  authDomain: "coviddata-ff21d.firebaseapp.com",
  projectId: "coviddata-ff21d",
  storageBucket: "coviddata-ff21d.appspot.com",
  messagingSenderId: "669024748294",
  appId: "1:669024748294:web:a48f05cadf5d40324b1487",
  measurementId: "G-2R5ZX8GRSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app)