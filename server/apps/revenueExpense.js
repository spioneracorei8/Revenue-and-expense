import { Router } from "express";
import { RevenueExpense } from "../models/revenueExpenseModel.js";
import mongoose from "mongoose";

const revenueExpenseRouter = Router()

// Get all revenue expense and balance data
revenueExpenseRouter.get("/", async (req, res) => {
    try {
        const revenueExpenseAllData = await RevenueExpense.find({})
        const balanceRevenueExpense = await RevenueExpense.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$revenues" },
                    totalExpense: { $sum: "$expenses" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalRevenue: 1,
                    totalExpense: 1,
                    balance: { $subtract: ["$totalRevenue", "$totalExpense"] }
                }
            }
        ])

        let revenueExpenseBalanceData = [...revenueExpenseAllData, ...balanceRevenueExpense]

        return res.status(200).json({
            "data": revenueExpenseBalanceData
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
                    totalRevenue: { $sum: "$revenues" },
                    totalExpense: { $sum: "$expenses" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalRevenue: 1,
                    totalExpense: 1,
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

// Add new revenue and expense
revenueExpenseRouter.post("/", async (req, res) => {
    const { description, revenues, expenses } = req.body

    try {
        const revenueExpense = await RevenueExpense({
            // user_id: 0,
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