
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyAc4BUK_lLvlR9B2joL8k9LCwq3Vx-dbkE",
  authDomain: "domo-ut-4824e.firebaseapp.com",
  projectId: "domo-ut-4824e",
  storageBucket: "domo-ut-4824e.appspot.com",
  messagingSenderId: "415571987677",
  appId: "1:415571987677:web:54102e8294778fcec29f34"
};
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app)


export default {app,bd};


  
