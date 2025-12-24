# EzySkills Platform

**Full-Stack Learning Platform – Authentication & Course-Oriented System**

EzySkills is a full-stack web application designed to provide an interactive and scalable learning platform.  
At the current stage, the system focuses on **user authentication (Signup & Login)** with a well-structured backend and a connected frontend, ready for future expansion.

The project follows clean architecture principles and uses modern web technologies to ensure maintainability, security, and scalability.

---

## 🚀 Features

- 🔐 User Registration (Create Account)
- 🔑 Secure Login with JWT Authentication
- 🧂 Password Hashing using bcrypt
- 🌐 Frontend & Backend Integration
- 🧱 Scalable Database Design
- 🎨 Modern UI built with React & Tailwind CSS

---

## 🧩 Tech Stack

### Frontend
- React.js  
- React Router  
- Tailwind CSS  
- Fetch API  

📚 React Documentation:  
https://react.dev  

📚 Tailwind CSS:  
https://tailwindcss.com/docs  

---

### Backend
- Node.js  
- Express.js  
- PostgreSQL  
- JWT (JSON Web Tokens)  
- bcrypt  

📚 Node.js:  
https://nodejs.org/en/docs  

📚 Express.js:  
https://expressjs.com  

📚 PostgreSQL:  
https://www.postgresql.org/docs/current/  

📚 JWT Authentication:  
https://jwt.io/introduction  

📚 bcrypt Password Hashing:  
https://www.npmjs.com/package/bcrypt  

---

## 🗄️ Database Design & Specifications

The project uses a **PostgreSQL relational database**.  
The database itself is **not included in the repository**, but its structure and relationships are fully documented below to allow easy recreation.

### 📌 Database Type
- **DBMS:** PostgreSQL  
- **Model:** Relational Database  
- **Design Style:** Normalized schema  

📚 Relational Database Concepts:  
https://www.ibm.com/docs/en/db2/11.5?topic=concepts-relational-database  

---

## 📂 Tables Overview

### 1️⃣ `users` Table

This table stores registered users and supports authentication and authorization.

| Column Name      | Data Type        | Description |
|------------------|------------------|-------------|
| `id`             | SERIAL (PK)      | Unique user identifier |
| `full_name`      | VARCHAR(100)     | User full name |
| `email`          | VARCHAR(150)     | User email (unique) |
| `password_hash`  | TEXT             | Hashed password |
| `role`           | VARCHAR(50)      | User role (e.g. student) |
| `created_at`     | TIMESTAMP        | Account creation time |

📚 PostgreSQL Data Types:  
https://www.postgresql.org/docs/current/datatype.html  

📚 SQL Constraints & Primary Keys:  
https://www.postgresql.org/docs/current/ddl-constraints.html  

---

## 🔐 Security Implementation

- Passwords are stored using **bcrypt hashing**
- Authentication is handled via **JWT**
- Email uniqueness is enforced at the database level
- Tokens are stored on the client side after successful login

📚 Web Security Best Practices:  
https://owasp.org/www-project-top-ten/  

---

## 🔗 Database Relationships

At the current stage:

- The system contains **one main entity (`users`)**
- The schema is designed to support future expansion

### Planned Future Relationships (Example)

