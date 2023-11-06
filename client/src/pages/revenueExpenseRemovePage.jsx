import React, { useEffect } from 'react'
import Navigationbar from '../components/navigationbar'
import "../style/revenueExpenseRemovePage.css"
import useRevenueExpnese from '../hook/useRevenueExpense'

const RevenueExpenseRemovePage = () => {

    const { revenueExpenseData, setRevenueExpenseData, removeRevenueExpenseHistory } = useRevenueExpnese()

    const handleRemoveRevenueExpense = (id) => {
        removeRevenueExpenseHistory(id)
        const newRevenueExpenseData = revenueExpenseData.filter((item) => {
            return item._id != id
        })
        setRevenueExpenseData(newRevenueExpenseData)
    }

    return (
        <>
            <Navigationbar />
            <div className='container-revenue-expense-remove'>
                {
                    revenueExpenseData.map((item) => {
                        return (
                            <div className='revenue-expense-data-remove' key={item._id}>
                                <p>Description: {item.description}</p>
                                <p>Amount: {item.amount}</p>
                                <p>Type of money: {item.type}</p>
                                <button onClick={() => handleRemoveRevenueExpense(item._id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default RevenueExpenseRemovePage