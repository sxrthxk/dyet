import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDi9JVpCKV2RoZN1w1d2pYkLLRO5slcllI",
  authDomain: "dyet-c6085.firebaseapp.com",
  databaseURL: "https://dyet-c6085-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dyet-c6085",
  storageBucket: "dyet-c6085.appspot.com",
  messagingSenderId: "469937027152",
  appId: "1:469937027152:web:faa4cc43b74f4f3af8b955",
  measurementId: "G-XR6F901DPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default app;
export { auth };