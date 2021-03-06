const express = require("express");
const connectDB = require("./config/db.js");

const app = express();

//connect database
connectDB();

app.get("/", (req, res) => res.send("API Running. . ."));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
