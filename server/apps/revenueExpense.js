import { Router } from "express";
import { RevenueExpense } from "../models/revenueExpenseModel.js";

const revenueExpenseRouter = Router()

revenueExpenseRouter.get("/", async (req, res) => {
    try {
        const revenueExpreseData = await RevenueExpense.find({})
        return res.status(200).json({
            "data": revenueExpreseData
        })
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while fetching data.",
            "error": error
        })
    }
})



export default revenueExpenseRouter