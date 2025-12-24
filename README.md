# 🎓 EzySkills Platform

EzySkills is a **full-stack e-learning platform** designed to provide a flexible and effective learning experience for students and professionals.  
The platform is structured with a clear separation between **frontend**, **backend**, and **database layers**, focusing on **scalability**, **security**, and **simplicity**.

This repository includes:
- ✅ Frontend (React)
- ✅ Backend (Node.js + Express)
- ❌ Database files not uploaded (ER Diagram below)

---

## 📌 Project Status

- **Frontend:** Completed  
- **Backend:** Completed (Authentication only)  
- **Database:** Designed & implemented locally  
- **Current Scope:** Register & Login  
- **Future Scope:** Courses, Enrollments, Subscriptions

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

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ezyskills.git
cd ezyskills
````

### 2️⃣ Backend Setup

```bash
cd ezyskills-backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=ezyskills
DB_PASSWORD=your_password
DB_PORT=5432
JWT_SECRET=your_secret_key
```

Run the backend server:

```bash
node server.js
```

**Backend runs on:**
[http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Frontend Setup

```bash
cd ezy-skills-frontend
npm install
npm run dev
```

**Frontend runs on:**
[http://localhost:5173](http://localhost:5173)

---

## 🗄️ Database Structure

The database is **not included** in this repository. Below is the table design and relationships used in the project.

### Tables

**1. users**

| Column        | Type         |
| ------------- | ------------ |
| id            | serial (PK)  |
| full_name     | varchar(100) |
| email         | varchar(150) |
| password_hash | text         |
| role          | varchar(20)  |
| created_at    | timestamp    |

**2. subscription_plans**

| Column      | Type          |
| ----------- | ------------- |
| id          | serial (PK)   |
| name        | varchar(100)  |
| max_courses | integer       |
| price       | numeric(10,2) |
| description | text          |

**3. user_subscriptions**

| Column     | Type                                 |
| ---------- | ------------------------------------ |
| id         | serial (PK)                          |
| user_id    | integer (FK → users.id)              |
| plan_id    | integer (FK → subscription_plans.id) |
| start_date | date                                 |
| end_date   | date                                 |
| is_active  | boolean                              |

**4. courses**

| Column      | Type                    |
| ----------- | ----------------------- |
| id          | serial (PK)             |
| title       | varchar(150)            |
| description | text                    |
| teacher_id  | integer (FK → users.id) |
| created_at  | timestamp               |

**5. course_enrollments**

| Column      | Type                      |
| ----------- | ------------------------- |
| id          | serial (PK)               |
| student_id  | integer (FK → users.id)   |
| course_id   | integer (FK → courses.id) |
| enrolled_at | timestamp                 |
| progress    | integer                   |

**6. course_reviews**

| Column     | Type                      |
| ---------- | ------------------------- |
| id         | serial (PK)               |
| student_id | integer (FK → users.id)   |
| course_id  | integer (FK → courses.id) |
| rating     | integer                   |
| comment    | text                      |
| created_at | timestamp                 |

### Relationships

* **users ↔ user_subscriptions:** One-to-Many (one user can have multiple subscriptions)
* **subscription_plans ↔ user_subscriptions:** One-to-Many (one plan can be used by multiple users)
* **users ↔ courses:** One-to-Many (a teacher creates multiple courses)
* **users ↔ course_enrollments:** One-to-Many (a student can enroll in multiple courses)
* **courses ↔ course_enrollments:** One-to-Many (a course can have multiple students enrolled)
* **users ↔ course_reviews:** One-to-Many (a student can review multiple courses)
* **courses ↔ course_reviews:** One-to-Many (a course can have multiple reviews)

---

## 👤 Author

**Mohammed Zyoud**
Full Stack Developer

* Backend & Database Design
* Frontend Integration


