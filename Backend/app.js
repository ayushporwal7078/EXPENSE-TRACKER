const express = require("express");
const cors = require("cors");
const app = express();
const { db }= require("./db/db");
const transactions = require("./routes/transactions")

require('dotenv').config()


const PORT = process.env.PORT

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api", transactions)

db();

app.listen(PORT, ()=> {
    console.log("Server listening on PORT");
})

