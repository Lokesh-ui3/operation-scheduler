import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyACx_gGIBpcs-K-kDLX4W8zMQgkczHVCyI",
  authDomain: "operation-scheduler-40443.firebaseapp.com",
  databaseURL: "https://operation-scheduler-40443-default-rtdb.firebaseio.com",
  projectId: "operation-scheduler-40443",
  storageBucket: "operation-scheduler-40443.appspot.com",
  messagingSenderId: "439737052047",
  appId: "1:439737052047:web:483c45b9c9f90466b479fa",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

const form = document.getElementById("patient-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const contact = document.getElementById("contact").value;

  try {
    const newPatientRef = push(ref(db, "patients"));
    await set(newPatientRef, {
      name,
      age,
      gender,
      contact,
      createdAt: new Date().toISOString(),
    });
    statusEl.textContent = "✅ Patient added successfully!";
    form.reset();
  } catch (err) {
    console.error(err);
    statusEl.textContent = "❌ Failed to add patient.";
  }
});

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in to access this page.");
    location.href = "index.html";
  }
});
