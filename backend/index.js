require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT_REST = 5000;

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

let db;
MongoClient.connect(DB_URI)
  .then((client) => {
    db = client.db(DB_NAME);
    console.log(`Connected to MongoDB database: ${DB_NAME}`);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/questions", async (req, res) => {
  try {
    const { query } = req.query;
    const questions = await db
      .collection(COLLECTION_NAME)
      .find({ title: { $regex: query, $options: "i" } })
      .toArray();
    res.json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT_REST, () => {
  console.log(`Server running on port ${PORT_REST}`);
});
