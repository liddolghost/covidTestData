// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore, addDoc,collection} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

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

// Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);


 const submitDatabtn = document.getElementById('submitData');
 submitDatabtn.addEventListener('click', (e) => {
     var IsoCodeAdd = document.getElementById('IsoCodeAdd').value.trim();
     var LocationAdd = document.getElementById('LocationAdd').value.trim();
     var DateAdd = document.getElementById('DateAdd').value.trim();
     var NewCasesAdd = document.getElementById('NewCasesAdd').value.trim();
     var NewDeathsAdd = document.getElementById('NewDeathsAdd').value.trim();

     if (IsoCodeAdd && LocationAdd && NewCasesAdd && NewDeathsAdd) {
       addDoc(collection(db, "covid-test"), {
         IsoCode: IsoCodeAdd,
         Location: LocationAdd,
         Date: DateAdd,
         NewCases: NewCasesAdd,
         NewDeaths: NewDeathsAdd
       }).then(() => {
         // Add a new activity log document
         const activityLogCollection = collection(db, "covidtest-activitylog");
         const Datecreated = new Date().toISOString();
         addDoc(activityLogCollection, {
           Datecreated: Datecreated,
           action: `${LocationAdd} has been add with`,
           details: `${NewCasesAdd} new cases and ${NewDeathsAdd} new deaths data has been added.`
         }).then(() => {
           alert("Data added successfully");
           location.reload();
         });
       }).catch((error) => {
         console.error("Error adding document: ", error);
       });
     } else {
       alert("Please fill in all the input fields");
     }
   });
