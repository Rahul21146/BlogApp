const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((error) => {
        console.log("Database connection having some issues.");
        console.log(error);
        process.exit(1);
    });
}

module.exports = connectWithDb;
