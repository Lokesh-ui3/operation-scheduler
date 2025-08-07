# 🏥 Operation Scheduler for Hospital Management

A **web-based Operation Scheduler** designed for hospital use. This application streamlines the planning and management of surgical operations.

- **Admins** can register doctors and patients, assign surgery schedules, and manage surgical reports.
- **Users (patients)** can register, log in, view doctor information, and check their scheduled surgeries.

The system is fully powered by **Firebase** for:
- 🔐 Authentication
- 📦 Realtime database
- 📁 Cloud storage
- 🚀 Hosting

🌐 **Live Site**: [https://operation-scheduler.web.app/](https://operation-scheduler.web.app/) *(replace with actual deployed link)*

---

## ✅ Features

### 🔐 Role-Based Access Control
**Separate Interfaces for Admins and Users**:

---

### 👨‍⚕️ Admin Portal:
- **Secure Login** *(credentials can be hardcoded or added manually)*
- **Doctor & Patient Management**: Add, edit, and view profiles
- **Surgery Scheduling**: Assign operation theater, date/time, surgeons, and assistants
- **Surgical Reports Upload**: Upload/view PDFs or image reports using Firebase Storage
- **Conflict Prevention**: Avoid double-booking of OT slots and surgeons

---

### 👤 User Portal:
- **Registration/Login**: Firebase Authentication for secure sign-up/sign-in
- **Doctor Directory**: View doctors' names, specialties, and contact info
- **View Scheduled Surgeries**: Displays upcoming surgeries scheduled for the user

---

### 🔁 Real-Time Updates
- All data is stored in **Firebase Realtime Database**
- Any additions or updates reflect instantly across users

### 🗂️ File Storage
- Surgical report files (PDF/images) are uploaded and served via **Firebase Storage**

### 🖥️ Responsive UI
- Built using **HTML**, **CSS**, and **Modular JavaScript**
- Fully functional on **both desktop and mobile devices**

---

## 🛠️ Technology Stack

| Layer           | Tech Used               |
|----------------|-------------------------|
| Front-End      | HTML5, CSS3, JavaScript (ES Modules) |
| Backend & Auth | Firebase Authentication |
| Database       | Firebase Realtime Database |
| File Storage   | Firebase Storage        |
| Hosting        | Firebase Hosting        |

---

## 🗃️ Project Structure

Operation-Scheduler/
├── admin/ # Admin portal
│ ├── index.html # Admin login
│ ├── dashboard.html # Admin dashboard
│ ├── add-doctor.html # Add doctor
│ ├── view-doctors.html# View doctors
│ ├── add-patient.html # Add patient
│ ├── view-patients.html# View patients
│ ├── schedule.html # Schedule surgery
│ ├── reports.html # Surgical reports
│ └── styles.css # Admin styles
│ └── admin.js # Admin JavaScript logic
│
├── user/ # Patient (user) portal
│ ├── user-register.html # Registration page
│ ├── user-login.html # Login page
│ ├── user-dashboard.html # Dashboard after login
│ ├── view-doctors.html # View doctor info
│ ├── view-surgeries.html # View scheduled surgeries
│ └── styles.css # User styles
│ └── user.js # User JavaScript logic
│
├── public/ # Firebase Hosting folder
│ └── firebase.json # Firebase config
│ └── .firebaserc # Firebase project alias
├── README.md # This file



---

## 🔑 Firebase Setup & Deployment

> ✅ Make sure Firebase CLI is installed: `npm install -g firebase-tools`

### 1. 🔧 Firebase Configuration
Ensure your Firebase project is correctly initialized:

```bash
firebase init
# Choose: Hosting, Authentication, Database, Storage
