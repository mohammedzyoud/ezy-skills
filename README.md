# 🎓 EzySkills Platform

EzySkills is a full-stack e-learning platform designed to provide a flexible and effective learning experience for students and professionals.  
The platform is built with a clear separation between frontend, backend, and database layers, focusing on scalability, security, and simplicity.

This repository includes:
- ✅ Frontend (React)
- ✅ Backend (Node.js + Express)
- ❌ Database files not uploaded (fully documented below)

---

## 📌 Project Status

- Frontend: Completed
- Backend: Completed (Authentication only)
- Database: Designed & implemented locally
- Current Scope: Register & Login
- Future Scope: Courses, Enrollments, Subscriptions

---

## 🚀 Features (Current Phase)

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)
- PostgreSQL Integration
- Frontend ↔ Backend Connection

---

## 🧩 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Fetch API

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- dotenv
- cors

### Database
- PostgreSQL

---

⚙️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/your-username/ezyskills.git
cd ezyskills

2️⃣ Backend Setup
cd ezyskills-backend
npm install


Create a .env file inside the backend folder:

PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=ezyskills
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_secret_key


Run the backend server:

node server.js


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd ezy-skills-frontend
npm install

Run the Frontend server:

npm run dev


Backend runs on:

http://localhost:5000](http://localhost:5173/


ERP Database

![ERP Diagram](./assets/ERP%20Diagram.png)



👤 Author

Mohammed Zyoud
Full Stack Developer
Backend & Database Design
Frontend Integration
