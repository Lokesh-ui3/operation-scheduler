import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

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
const table = document.getElementById("surgery-table");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("❗ You must be logged in to view surgeries.");
    window.location.href = "user-login.html";
    return;
  }

  get(child(ref(db), "operations"))
    .then((snapshot) => {
      table.innerHTML = "";

      if (!snapshot.exists()) {
        table.innerHTML = "<tr><td colspan='5'>No surgeries found</td></tr>";
        return;
      }

      snapshot.forEach((child) => {
        const op = child.val();
        const row = `
          <tr>
            <td>${op.date || "-"}</td>
            <td>${op.time || "-"}</td>
            <td>${op.otId || "-"}</td>
            <td>${op.patient || "-"}</td>
            <td>${op.surgeon || "-"}</td>
          </tr>
        `;
        table.innerHTML += row;
      });
    })
    .catch((error) => {
      console.error("❌ Failed to load surgeries:", error.message);
      table.innerHTML = `<tr><td colspan='5'>❌ Error: ${error.message}</td></tr>`;
    });
});
