
import React from 'react'
import Navigationbar from '../components/navigationbar'
import useRevenueExpnese from '../hook/useRevenueExpense'
import "../style/homePage.css"

const HomePage = () => {
    const { revenueExpenseData, balance, totalRevenue, totalExpense } = useRevenueExpnese()
    return (
        <>
            <Navigationbar />
            <div className='container-revenue-expense-data'>
                {
                    revenueExpenseData.map((item) => {
                        return (
                            <div className='revenue-expense-data' key={item._id}>
                                <h1>Description: {item.description}</h1>
                                <h2>Type of money: {item.type}</h2>
                                <h3>Amount: {item.amount}</h3>
                                <h4>{item.date}</h4>
                            </div>
                        )
                    })
                }
                <div className='container-money-summary'>
                    <h3>
                        Total Revenue: <span>{totalRevenue}</span>
                    </h3>
                    <h3>
                        Total Expense: <span>{totalExpense}</span>
                    </h3>
                    <h3>
                        Balance: <span>{balance}</span>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default HomePage