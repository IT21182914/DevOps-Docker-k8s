require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", todoRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`\nServer is running on port ${PORT} 🔥`));
