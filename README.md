
# QuestSearch Final

Quest Search Final is a web application that allows users to search for questions based on their titles. The application is built using **React** for the frontend, **Node.js** with **Express** for the backend, and it connects to a **MongoDB** database to store and retrieve questions.

## Features

- **Search for questions** by title.
- **Responsive design** using Bootstrap.
- **Dark/Light theme toggle**.

## Technologies Used

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas

## Getting Started

Follow the steps below to get the application up and running locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A **MongoDB Atlas** account (for the database)

---

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Babal1111/QuestSearch_final.git
   ```

2. **Navigate to the backend directory**:
   ```bash
   cd QuestSearch_final/backend
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file**:
   In the backend directory, create a file named `.env` and add the following content:

   ```bash
   DB_URI=mongodb+srv://babalpreet102:Babal1111@questions.upcav.mongodb.net/?retryWrites=true&w=majority&appName=questions
   DB_NAME=questions
   COLLECTION_NAME=questionare
   ```

5. **Start the backend server**:
   ```bash
   node index.js
   ```

   The backend server will run on `http://localhost:5000`.

---

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend application**:
   ```bash
   npm start
   ```

   The frontend application will run on `http://localhost:3000`.

---

## Usage

Once both the frontend and backend are running:

1. Open the frontend application in your browser at `http://localhost:3000`.
2. You can now search for questions based on their titles.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
