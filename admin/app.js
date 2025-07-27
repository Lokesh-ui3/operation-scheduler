import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const statusEl = document.getElementById("status");

document.getElementById("auth-form").addEventListener("submit", (e) => {
  e.preventDefault();
  loginUser();
});

document.getElementById("register-btn").addEventListener("click", registerUser);

function loginUser() {
  const email = emailEl.value;
  const password = passwordEl.value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Login successful:", userCredential.user);
    window.location.href = "dashboard.html"; // ✅ Redirect to dashboard
  })
  .catch((error) => {
    console.error("Login failed:", error.message);
    statusEl.textContent = "Login error: " + error.message;
  });

}

function registerUser() {
  const email = emailEl.value;
  const password = passwordEl.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Registration successful:", userCredential.user);
      statusEl.textContent = "Registered successfully!";
    })
    .catch((error) => {
      console.error("Registration failed:", error.message);
      statusEl.textContent = "Registration error: " + error.message;
    });
}
