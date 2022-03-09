import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt1TFm4CWj_jxC1Mk5uKY5ZNtsSsBSv9s",
  authDomain: "ziplyne-194db.firebaseapp.com",
  databaseURL: "https://ziplyne-194db-default-rtdb.firebaseio.com",
  projectId: "ziplyne-194db",
  storageBucket: "ziplyne-194db.appspot.com",
  messagingSenderId: "72480447384",
  appId: "1:72480447384:web:570c774eed8e79e123a9ed"



};



const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);


export default db;


