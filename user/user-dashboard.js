import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACx_gGIBpcs-K-kDLX4W8zMQgkczHVCyI",
  authDomain: "operation-scheduler-40443.firebaseapp.com",
  databaseURL: "https://operation-scheduler-40443-default-rtdb.firebaseio.com",
  projectId: "operation-scheduler-40443",
  storageBucket: "operation-scheduler-40443.appspot.com",
  messagingSenderId: "439737052047",
  appId: "1:439737052047:web:483c45b9c9f90466b479fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Please login first.");
    window.location.href = "user-login.html";
  }
});

// Logout function
document.getElementById("logout-btn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out successfully!");
    window.location.href = "user-login.html";
  }).catch((error) => {
    console.error("Logout failed:", error.message);
  });
});
