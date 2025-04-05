
# Authentication-System-Node-js

## 📖 Project Overview

This is a Node.js-based authentication system that uses JSON Web Tokens (JWT) for secure authentication and MySQL as the database. The project features:

- User registration and login with hashed passwords.
- Protected API endpoints using JWT.
- Public API access with an API key.
- Candidate management linked to authenticated users.

---

## 🛠️ Technologies Used

- **Node.js** – Server-side runtime
- **Express.js** – Web framework
- **MySQL** – Database
- **JWT (jsonwebtoken)** – For authentication
- **bcryptjs** – For password hashing
- **body-parser** – For parsing incoming request bodies

---

## 📁 Folder Structure

```
project/
│
├── app.js
├── config.js
├── package.json
│
├── routes/
│   ├── auth.js
│   ├── candidate.js
│   └── public.js
│
├── controllers/
│   ├── authController.js
│   ├── candidateController.js
│   └── publicController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── userModel.js
│   └── candidateModel.js
│
└── utils/
    └── jwt.js
```

---

## 📦 Dependencies

```bash
npm install express mysql2 bcryptjs jsonwebtoken body-parser
```

---

## ⚙️ Configuration (`config.js`)

```js
module.exports = {
  database: {
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'mydb'
  },
  jwtSecret: 'your_jwt_secret_key',
  apiKey: 'your_api_key'
};
```

---

## 🧱 Database Schema

```sql
CREATE DATABASE mydb;
USE mydb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## 🚀 Installation

1. Clone the repo:

```bash
git clone https://github.com/YaminiD02/Authentication-System-Node-js.git
cd Authentication-System-Node-js
```

2. Install dependencies:

```bash
npm install
```

3. Set up your database and update `config.js` with your credentials.

4. Run the server:

```bash
node app.js
```

---

## 🔐 API Endpoints

### 👤 User Authentication

- `POST /api/register` - Register a new user
- `POST /api/login` - Log in and receive a JWT
- `POST /api/protected` - Protected route (requires JWT)

### 👥 Candidate Management

- `POST /api/candidate` - Add a new candidate (JWT required)
- `GET /api/candidate` - Retrieve candidates added by the user

### 🌐 Public Endpoints (API Key Required)

- `POST /api/public/profile` - Retrieve user profile by email
- `GET /api/public/candidate` - Retrieve candidates by user_id

---

## 🧪 Testing with Postman

### 1. Register a New User

- Method: `POST`
- URL: `http://localhost:3000/api/register`
- Body (raw JSON):

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

---

### 2. Log In

- Method: `POST`
- URL: `http://localhost:3000/api/login`
- Body:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

You'll receive a JWT token.

---

### 3. Access Protected Endpoint

- Method: `POST`
- URL: `http://localhost:3000/api/protected`
- Headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 4. Add a Candidate

- Method: `POST`
- URL: `http://localhost:3000/api/candidate`
- Headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

- Body:

```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com"
}
```

---

### 5. Retrieve Candidates

- Method: `GET`
- URL: `http://localhost:3000/api/candidate`
- Headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 6. Public: Retrieve User Profile

- Method: `POST`
- URL: `http://localhost:3000/api/public/profile`
- Headers:

```
x-api-key: your_api_key
```

- Body:

```json
{
  "email": "john.doe@example.com"
}
```

---

### 7. Public: Retrieve Candidates for a User

- Method: `GET`
- URL: `http://localhost:3000/api/public/candidate`
- Headers:

```
x-api-key: your_api_key
```

- Body:

```json
{
  "user_id": 1
}
```

---

## 📌 Notes

- Replace placeholders like `your_password`, `your_jwt_secret_key`, and `your_api_key` with actual secure values.
- Make sure MySQL is running before launching the app.
- This project is meant for learning/demo purposes. Security hardening is required before production use.

---

## 📧 Contact

For any queries or suggestions, feel free to open an issue or contribute!
