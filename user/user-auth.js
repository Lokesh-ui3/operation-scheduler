import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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

// Register
const regForm = document.getElementById("register-form");
if (regForm) {
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        document.getElementById("reg-status").textContent = "✅ Registered successfully!";
      })
      .catch((err) => {
        document.getElementById("reg-status").textContent = "❌ " + err.message;
      });
  });
}

// Login
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "user-dashboard.html";
      })
      .catch((err) => {
        document.getElementById("login-status").textContent = "❌ " + err.message;
      });
  });
}
