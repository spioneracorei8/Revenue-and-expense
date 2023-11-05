import mongoose from "mongoose";

const Schema = mongoose.Schema

const revenueExpenseSchema = new Schema({
    description: String,
    type: String,
    amount: Number,
    date: String,
})

const RevenueExpense = mongoose.model("revenueExpenseAccounts", revenueExpenseSchema, "revenueExpenseAccounts")

export { RevenueExpense }