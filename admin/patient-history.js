import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// ✅ Firebase Config
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
const db = getDatabase(app);
const auth = getAuth(app);

// 🔐 Protect Page
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Please login first.");
    location.href = "index.html";
  } else {
    loadPatientDropdown();
  }
});

function loadPatientDropdown() {
  const select = document.getElementById("patient-select");
  const patientsRef = ref(db, "patients");

  onValue(patientsRef, (snapshot) => {
    snapshot.forEach((child) => {
      const patient = child.val();
      const option = document.createElement("option");
      option.value = patient.name;
      option.textContent = patient.name;
      select.appendChild(option);
    });
  });
}

// 🔁 Load operations for selected patient
document.getElementById("patient-select").addEventListener("change", (e) => {
  const selectedPatient = e.target.value;
  const table = document.getElementById("history-table");
  const tbody = table.querySelector("tbody");

  if (!selectedPatient) {
    table.style.display = "none";
    return;
  }

  const opsRef = ref(db, "operations");
  onValue(opsRef, (snapshot) => {
    tbody.innerHTML = ""; // Clear old rows
    let found = false;

    snapshot.forEach((child) => {
      const op = child.val();
      if (op.patient === selectedPatient) {
        found = true;
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${op.date}</td>
          <td>${op.time}</td>
          <td>${op.otId}</td>
          <td>${op.surgeon}</td>
          <td>${op.anesthesiologist || "-"}</td>
          <td>${op.notes || "-"}</td>
        `;
        tbody.appendChild(row);
      }
    });

    table.style.display = found ? "table" : "none";
    if (!found) alert("No operations found for this patient.");
  });
});
