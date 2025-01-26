# QuestSearch_final

# Quest Search Final

Quest Search Final is a web application that allows users to search for questions based on their titles. The application is built using React for the frontend and Node.js with Express for the backend, and it connects to a MongoDB database to store and retrieve questions.

## Features

- Search for questions by title.
- Responsive design using Bootstrap.
- Dark/light theme toggle.

## Technologies Used

- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express, MongoDB
- **Database:** MongoDB Atlas

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A MongoDB Atlas account (for the database)

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/QuestSearch_final.git
   
 2. Navigate to backend directory:
     cd QuestSearch_final/backend
 3.  Install dependencies:
    npm i
 4. Create a .env file:
    In the backed directory, create a file named .env and add the following content:
    
    DB_URI=mongodb+srv://babalpreet102:Babal1111@questions.upcav.mongodb.net/?retryWrites=true&w=majority&appName=questions
    DB_NAME=questions
    COLLECTION_NAME=questionare
 5. Start the backend server:
    node index.js
    The backend server will run on http://localhost:5000.
### Fronted Setup
1. Navigate to the frontend directory:
   cd ../front end

2. Install dependencies:
   npm i
3. Start the frontend application:
   npm start
The frontend application will run on http://localhost:3000.
