import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEdj1eOejQVUIGD1Hkfti8iou_OUOENrY",
    authDomain: "makeup-app-78db5.firebaseapp.com",
    projectId: "makeup-app-78db5",
    storageBucket: "makeup-app-78db5.appspot.com",
    messagingSenderId: "612371776541",
    appId: "1:612371776541:web:6e0dffb2619c367e73f2f4",
    measurementId: "G-P4EQG0ZKZJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };