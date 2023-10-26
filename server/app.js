import express from "express"
import 'dotenv/config'
import db from "./utils/db.js"

async function init() {
    const app = express()
    const port = process.env.PORT
    await db()

    app.get("/", (req, res) => {
        res.send(`Hello world!`)
    })

    app.get("*", (req, res) => {
        res.send(`Not found!`)
    })

    app.listen(port, () => {
        console.log(`server is running at ${port}`);
    })

}

init()