# Node Express API

Simple REST API with Express.js

---

## 📂 Project Structure
node-express-api/
├── index.js
├── package.json
└── src/
├── config/
│   └── constants.js
├── controllers/
│   └── user.controller.js
├── services/
│   └── user.service.js
├── routes/
│   └── user.routes.js
└── middleware/
├── validator.js
└── errorHandler.js

Code

---

## ⚙️ Setup

npm install
npm start
🌐 API Endpoints
Method	URL	Description
GET	/health	Health check
POST	/users	Create user
GET	/users	Get all users
GET	/users/:id	Get user by ID
📌 Example
Create User:

json
POST /users
{
  "name": "John Doe",
  "email": "john@test.com"
}
✨ Features
ES6 modules

Input validation

Error handling

HTTP status constants

Duplicate email prevention

📝 SECTION A – Node.js & JavaScript Basics (20 Marks)
Q1. Answer any 4 of 5 (5 marks each)
1. What is Node.js and why is it used?
Ans: Node.js  is a JavaScript runtime environment that allows us to run JavaScript code outside the browser.
It is used because it uses non blocking asynchronous I/O, which makes it fast meaning that multiple users can request data at the same time without blocking the server.
It is suitable for building REST APIs, real-time applications, and backend services.
JS could be used for both frontend and backend.

2. Difference between require() and import
Ans: require is used in CommonJS modules, it is default in Node.js..
While import is used in ES modules and is default in modern JS. To use it, "type": "module" is to be added to the package.json  file.
Most Express projects use require() unless ES module is enabled.

3. What is async/await?
Ans: async/await is a syntax in JavaScript used to handle asynchronous operations in a clean and readable way.
async makes a function return a Promise.
await pauses execution until the Promise is resolved.
It avoids callback hell and improves readability.
Mainly used for API calls or fetching data from the database.

4. Explain package.json
Ans: It is a configuration file in a Node.js  project which contains all the installed dependencies, scripts and the metadata of the project.
Eg: we can add a npm start script to the package.json  file to conveniently run any project.

5. What is middleware in Express?
Ans: Middleware is a function that runs between the request and the response in an Express application.
Used for authentication, validation and error handling.
It has to call next() function to pass the control to the next function.
Eg: validate request body before reaching the controller logic.

🐞 SECTION D – Debugging & Fixing Code (15 Marks)
Given Code
js
app.get('/users/:id', (req, res) => { 
    const user = users.find(u => u.id = req.params.id);  
    if (user) { 
        res.send(user); 
    } else { 
        res.send("User not found"); 
    } 
});
Tasks
Identify the bug

Fix it

Improve the response

Expected Improvements:

Correct comparison

Return 404 status

JSON response

Answer
Here is the problem: we must use comparison operator (== or ===) instead of assignment operator (=).

I converted the route parameter to number to prevent bugs, returned proper HTTP code 404 and JSON response.

Corrected Code:

js
app.get('/users/:id', (req, res) => { 
  const id = Number(req.params.id); 
  const user = users.find(u => u.id === id); 

  if (!user) { 
    return res.status(404).json({ error: "User not found" }); 
  } 

  res.status(200).json(user); 
});
🎯 SECTION E – Design & Best Practices
1. Structure a Node.js project?
Ans: A well-structured Node.js  project improves readability and maintainability.
The common structure includes separate folders for different types of files:

routes → contains all the API routes

controllers → handles requests and responses

services → contains business logic

models → defines data structure

middlewares → validation and authentication between request and response

app.js → contains application setup

2. Handle errors in Express?
Ans: Errors in Express are handled using try-catch, middleware and proper HTTP status codes.
Eg: database failure or unexpected runtime error.

3. Environment variables for dynamic parameters?
Ans: Environment variables are used to store configuration values that may change between environments.
They contain sensitive data such as API keys, database URL, and port number.
This avoids hardcoding sensitive values and increases security.
