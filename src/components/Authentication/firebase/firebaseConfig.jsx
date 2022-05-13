// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqxqoMG8huABrkYgVld-lYPHR0meAeLKw",
  authDomain: "rebeboutique-421fc.firebaseapp.com",
  projectId: "rebeboutique-421fc",
  storageBucket: "rebeboutique-421fc.appspot.com",
  messagingSenderId: "254698961753",
  appId: "1:254698961753:web:ee2e42194c00161b592a48",
  measurementId: "G-9BL0P66M46"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()
// const analytics = getAnalytics(app);
export default {app}
