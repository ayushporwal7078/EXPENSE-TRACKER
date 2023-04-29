const mongoose = require("mongoose");
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected Successfully");
    } catch (error) {
        console.log("DB connection Error", error)
    }
}

module.exports = {db}