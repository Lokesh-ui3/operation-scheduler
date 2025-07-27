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

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must be logged in to access this page.");
    location.href = "index.html";
  }
});

const form = document.getElementById("operation-form");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const operationData = {
    patient: document.getElementById("patient").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    otId: document.getElementById("otId").value,
    surgeon: document.getElementById("surgeon").value,
    assistant: document.getElementById("assistant").value,
    anesthesia: document.getElementById("anesthesia").value,
    anesthesiologist: document.getElementById("anesthesiologist").value,
    nurses: document.getElementById("nurses").value,
    materials: document.getElementById("materials").value,
    notes: document.getElementById("notes").value,
    createdAt: new Date().toISOString(),
  };

  try {
    const opRef = push(ref(db, "operations"));
    await set(opRef, operationData);
    statusEl.textContent = "✅ Operation scheduled successfully!";
    form.reset();
  } catch (error) {
    console.error(error);
    statusEl.textContent = "❌ Failed to schedule operation.";
  }
});
