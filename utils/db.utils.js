const mongoose = require("mongoose");

function dbConnection() {
    mongoose
        .connect(process.env.DATABASE_LOCAL, {
            dbName: "node-job-portal",
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => console.log(`Error: ${error.name}`));
}

module.exports = dbConnection;
