# Node Express API

Simple REST API with Express.js

## Structure
```
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
```

## Setup
```bash
npm install
npm start
```

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /health | Health check |
| POST | /users | Create user |
| GET | /users | Get all users |
| GET | /users/:id | Get user by ID |

## Example

**Create User:**
```json
POST /users
{
  "name": "John Doe",
  "email": "john@test.com"
}
```

## Features
- ES6 modules
- Input validation
- Error handling
- HTTP status constants
- Duplicate email prevention
