require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnection = require("./utils/db.utils");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
    res.send("Portal server is running");
});

app.listen(port, () => {
    console.log(`Portal server is running on ${port}`);
});
