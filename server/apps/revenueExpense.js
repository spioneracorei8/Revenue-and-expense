import { Router } from "express";
import { RevenueExpense } from "../models/revenueExpenseModel.js";
import mongoose from "mongoose";

const revenueExpenseRouter = Router()

revenueExpenseRouter.get("/", async (req, res) => {
    try {
        const revenueExpenseData = await RevenueExpense.find({})
        return res.status(200).json({
            "data": revenueExpenseData
        })
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while fetching data",
            "error": error
        })
    }
})

revenueExpenseRouter.post("/", async (req, res) => {
    const { description, revenues, expenses } = req.body

    try {
        const revenueExpense = await RevenueExpense({
            description,
            revenues,
            expenses,
            date: new Date(),
        })
        await revenueExpense.save()
        return res.status(200).json({
            "message": "Saving revenue and expense successfully"
        })
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while inserting data",
            "error": error
        })
    }
})


export default revenueExpenseRouter