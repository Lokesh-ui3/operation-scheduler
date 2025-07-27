// ✅ ONLY THIS BLOCK should exist in firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACx_gGIBpcs-K-kDLX4W8zMQgkczHVCyI",
  authDomain: "operation-scheduler-40443.firebaseapp.com",
  databaseURL: "https://operation-scheduler-40443-default-rtdb.firebaseio.com",
  projectId: "operation-scheduler-40443",
  storageBucket: "operation-scheduler-40443.appspot.com",
  messagingSenderId: "439737052047",
  appId: "1:439737052047:web:483c45b9c9f90466b479fa",
  measurementId: "G-N1XND7XK4H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
