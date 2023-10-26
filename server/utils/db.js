import mongoose from "mongoose";

function db() {
    const connectionString = "mongodb://127.0.0.1:27017/revenue-and-expense";

    mongoose.connect(connectionString).then(() => console.log(`Connected!`))
}

export default db