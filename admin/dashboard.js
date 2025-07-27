import { auth } from "./firebase-config.js";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Redirect to login if not logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Please login first.");
    location.href = "index.html";
  }
});

// Logout button logic
document.getElementById("logout-btn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("✅ Logged out successfully.");
      location.href = "index.html";
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
    });
});
