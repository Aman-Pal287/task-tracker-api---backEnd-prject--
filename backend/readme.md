# 📝 Task Tracker API

A simple and clean RESTful API built with **Express.js** and **MongoDB** using **Mongoose** ORM.  
It allows users to manage tasks with Create, Read, Update, and Delete operations.

---

## 🚀 Features

- Add new tasks
- Get all tasks
- Get a task by ID
- Update task (status/title)
- Delete task
- MongoDB database integration
- Modular folder structure

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Other:** dotenv, nodemon

---

## 🧠 API Endpoints

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| GET    | `/tasks`     | Get all tasks         |
| GET    | `/tasks/:id` | Get single task by ID |
| POST   | `/tasks`     | Create a new task     |
| PATCH  | `/tasks/:id` | Update task           |
| DELETE | `/tasks/:id` | Delete task           |

---

## 📄 Task Schema

```js
{
  title: String, // required
  status: String, // 'pending' | 'completed' (default: 'pending')
  createdAt: Date // default: Date.now
}
```

⚙️ Installation & Setup

# 1. Clone this repo

git clone https://github.com/yourusername/task-tracker-api.git
cd task-tracker-api

# 2. Install dependencies

npm install

# 3. Create .env file

PORT=3000
MONGO_URI=your_mongodb_connection_url

# 4. Start server

npm start

---

📬 Example Request (POST /tasks)
{
"title": "Learn Express.js",
"status": "pending"
}

---

🧪 Testing with Postman
Use Postman or Thunder Client VSCode Extension to test these endpoints.

---

💡 Future Improvements
Add user authentication (JWT)

Assign tasks to users

Pagination and search

Frontend with React

---

🧑‍💻 Author
Made with ❤️ by Aman Kumar

---

📜 License
MIT
