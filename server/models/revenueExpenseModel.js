import mongoose from "mongoose";

const Schema = mongoose.Schema

const revenueExpenseSchema = new Schema({
    // user_id: Number,
    date: Date,
    description: String,
    revenues: Number,
    expenses: Number,
    comment: String,
})

const RevenueExpense = mongoose.model("revenueExpenseAccounts", revenueExpenseSchema, "revenueExpenseAccounts")

export { RevenueExpense }