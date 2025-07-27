import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
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
    alert("Please log in to view operations.");
    location.href = "index.html";
  } else {
    loadOperations();
  }
});

function loadOperations() {
  const tableBody = document.querySelector("#operations-table tbody");
  const opsRef = ref(db, "operations");

  onValue(opsRef, (snapshot) => {
    tableBody.innerHTML = "";

    snapshot.forEach((child) => {
      const op = child.val();

      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${op.date}</td>
            <td>${op.time}</td>
            <td>${op.otId}</td>
            <td>${op.surgeon}</td>
            <td>${op.anesthesiologist}</td>
            <td>${op.notes || "-"}</td>
          `;
      tableBody.appendChild(row);
    });
  });
}
