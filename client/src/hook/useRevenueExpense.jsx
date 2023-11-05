import { useEffect, useState } from "react"
import axios from "axios"

const useRevenueExpnese = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [revenueExpenseData, setRevenueExpenseData] = useState([])

    useEffect(() => {
        getAllRevenueExpenseData()
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
    }

}

export default useRevenueExpnese