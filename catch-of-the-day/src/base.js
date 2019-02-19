import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOz9kqiiPcx4QTUpcvz4t-sLoKD1wMD8I",
  authDomain: "catch-of-the-day-dani-amsalem.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dani-amsalem.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
