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

// Your Firebase config
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

// Auth check
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in to access this page.");
    location.href = "index.html";
  }
});

const form = document.getElementById("doctor-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const specialization = document.getElementById("specialization").value;
  const contact = document.getElementById("contact").value;

  try {
    const doctorRef = push(ref(db, "doctors"));
    await set(doctorRef, {
      name,
      specialization,
      contact,
      createdAt: new Date().toISOString(),
    });
    statusEl.textContent = "✅ Doctor added successfully!";
    form.reset();
  } catch (error) {
    console.error("Error adding doctor:", error);
    statusEl.textContent = "❌ Failed to add doctor.";
  }
});
