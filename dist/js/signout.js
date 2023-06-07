import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

  //----- Logout code start	  
  document.getElementById("logout").addEventListener("click", function() {
    signOut(auth).then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.');
          alert('Sign-out successful.');
          window.location = "./index.html";

          // document.getElementById('logout').style.display = 'none';
        }).catch((error) => {
          // An error happened.
          console.log('An error happened.');
        });		  		  
  });
  //----- End