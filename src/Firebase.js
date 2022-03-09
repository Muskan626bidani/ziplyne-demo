import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDt1TFm4CWj_jxC1Mk5uKY5ZNtsSsBSv9s",
  // authDomain: "ziplyne-194db.firebaseapp.com",
  // databaseURL: "https://ziplyne-194db-default-rtdb.firebaseio.com",
  // projectId: "ziplyne-194db",
  // storageBucket: "ziplyne-194db.appspot.com",
  // messagingSenderId: "72480447384",
  // appId: "1:72480447384:web:570c774eed8e79e123a9ed"

  apiKey: "AIzaSyAfJTGsx3HsGeJlkIeSTf_VsrlgEw2pfrY",
  authDomain: "sae-website-127b1.firebaseapp.com",
  projectId: "sae-website-127b1",
  storageBucket: "sae-website-127b1.appspot.com",
  messagingSenderId: "636129718123",
  appId: "1:636129718123:web:555343dd6f0255ecbe262e",
  measurementId: "G-BHECE0F8CX"

};



const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);


export default db;


