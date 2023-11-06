import { useEffect, useState } from "react"
import axios from "axios"

const useRevenueExpnese = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [revenueExpenseData, setRevenueExpenseData] = useState([])
    const [balance, setBalance] = useState(0)
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)

    useEffect(() => {
        getAllRevenueExpenseData()
        getBalanceRevenueExpense()
        getGrandTotalRevenueExpense()
    }, [])

    const getAllRevenueExpenseData = async () => {
        try {
            setIsError(false)
            setIsLoading(true)
            const result = await axios.get(`http://localhost:4001/revenue-expense`)
            setRevenueExpenseData(result.data.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error);
        }
    }

    const getBalanceRevenueExpense = async () => {
        try {
            setIsError(false)
            setIsLoading(true)
            const result = await axios.get(`http://localhost:4001/revenue-expense/balance`)
            setBalance(result.data.balance)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error);
        }
    }

    const getGrandTotalRevenueExpense = async () => {
        try {
            setIsError(false)
            setIsLoading(true)
            const result = await axios.get(`http://localhost:4001/revenue-expense/grand-total`)
            setTotalExpense(result.data.totalExpense)
            setTotalRevenue(result.data.totalRevenue)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error);
        }
    }

    const addNewRevenueExpense = async (data) => {
        try {
            setIsError(false)
            setIsLoading(true)
            await axios.post(`http://localhost:4001/revenue-expense/`, data)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error);
        }
    }

    const removeRevenueExpenseHistory = async (id) => {
        try {
            setIsError(false)
            setIsLoading(true)
            await axios.delete(`http://localhost:4001/revenue-expense/${id}`)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error);
        }
    }




    return {
        revenueExpenseData,
        setRevenueExpenseData,
        removeRevenueExpenseHistory,
        addNewRevenueExpense,
        balance,
        totalRevenue,
        totalExpense
    }

}

export default useRevenueExpnese