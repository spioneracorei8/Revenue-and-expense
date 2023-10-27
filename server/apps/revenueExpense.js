import { Router } from "express";
import { RevenueExpense } from "../models/revenueExpenseModel.js";
import mongoose from "mongoose";

const revenueExpenseRouter = Router()

// Get all revenue expense and query data
revenueExpenseRouter.get("/", async (req, res) => {
  
    try {

        const revenueExpenseAllData = await RevenueExpense.find({})

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
                    totalRevenue: { $sum: "$revenues" },
                    totalExpense: { $sum: "$expenses" }
                }
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
                    totalRevenue: { $sum: "$revenues" },
                    totalExpense: { $sum: "$expenses" }
                }
            },
            {
                $project: {
                    _id: 0
                }
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
    const { description, revenues, expenses, date } = req.body

    try {
        const revenueExpense = await RevenueExpense({
            description,
            revenues,
            expenses,
            date,
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