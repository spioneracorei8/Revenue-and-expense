import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
import revenueExpreseRouter from "./Router/revenueExpense.js";

dotenv.config();

async function init() {
    const app = express()
    const port = process.env.PORT
    await db()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use("/revenue-expense", revenueExpreseRouter)

    app.get("/", (req, res) => {
        res.send(`Hello world!`)
    })

    app.get("*", (req, res) => {
        res.status(404).send(`Not found!`)
    })

    app.listen(port, () => {
        console.log(`server is running at ${port}`);
    })

}

init()