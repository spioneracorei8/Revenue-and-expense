import { Router } from "express";
import { RevenueExpense } from "../models/revenueExpenseModel.js";
import mongoose from "mongoose";

const revenueExpenseRouter = Router()

// Get all revenue expense and query data
revenueExpenseRouter.get("/", async (req, res) => {
    const date = req.query.date
    const type = req.query.type
    const query = {}

    if (date) {
        query.date = { $regex: new RegExp(`-${date}$`) }
    }
    if (type) {
        query.type = type
    }
    try {

        const revenueExpenseAllData = await RevenueExpense.find(query)

        return res.status(200).json({
            "data": revenueExpenseAllData
        })
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while fetching data",
            "error": error
        })
    }
})

// Get balance data
revenueExpenseRouter.get("/balance", async (req, res) => {
    try {
        const balanceRevenueExpense = await RevenueExpense.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: { $cond: [{ $eq: ["$type", "revenue"] }, "$amount", 0] } },
                    totalExpense: { $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] } }
                },
            },
            {
                $project: {
                    _id: 0,
                    balance: { $subtract: ["$totalRevenue", "$totalExpense"] }
                }
            }
        ])
        return res.status(200).json(balanceRevenueExpense[0])
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while fetching data",
            "error": error
        })
    }
})

// Get grand total data
revenueExpenseRouter.get("/grand-total", async (req, res) => {
    try {
        const grandTotalRevenueExpense = await RevenueExpense.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: { $cond: [{ $eq: ["$type", "revenue"] }, "$amount", 0] } },
                    totalExpense: { $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] } }
                }
            },
            {
                $project: { _id: 0 }
            }
        ])
        return res.status(200).json(grandTotalRevenueExpense[0])
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while fetching data",
            "error": error
        })
    }
})


// Add new revenue and expense
revenueExpenseRouter.post("/", async (req, res) => {
    const { description, type, amount, date } = req.body

    try {
        const revenueExpense = await RevenueExpense({
            description,
            type,
            amount,
            date,
        })
        await revenueExpense.save()
        return res.status(200).json({
            "message": "Saved revenue and expense successfully"
        })
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while inserting data",
            "error": error
        })
    }
})

// Delete revenue and expense by _id
revenueExpenseRouter.delete("/:id", async (req, res) => {
    const revenueExpenseId = new mongoose.Types.ObjectId(req.params.id)
    try {
        const revenueExpenseData = await RevenueExpense.findByIdAndDelete({ _id: revenueExpenseId })
        return res.status(200).json({
            "message": `Deleted ${revenueExpenseData.description} description in id ${revenueExpenseData._id} successfully`
        })
    } catch (error) {
        return res.status(500).json({
            "message": "An error occurred while deleting data",
            "error": error
        })
    }
})

export default revenueExpenseRouter