import mongoose from "mongoose";

const Schema = mongoose.Schema

const revenueExpenseSchema = new Schema({
    user_id: Number,
    date: Date,
    description: String,
    revenues: Number,
    expenses: Number,
    balance: Number
})

const RevenueExpense = mongoose.model("revenueExpenseAccounts", revenueExpenseSchema, "revenueExpenseAccounts")

export { RevenueExpense }