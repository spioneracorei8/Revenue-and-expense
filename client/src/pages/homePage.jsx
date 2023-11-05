
import React from 'react'
import Navigationbar from '../components/navigationbar'
import useRevenueExpnese from '../hook/useRevenueExpense'
import "../style/homePage.css"

const HomePage = () => {
    const { revenueExpenseData } = useRevenueExpnese()
    console.log(revenueExpenseData);
    return (
        <>
            <Navigationbar />
            <div className='container-revenue-expense-data'>
                {
                    revenueExpenseData.map((item) => {
                        return (
                            <div className='revenue-expense-data'>
                                <h1>{item.description}</h1>
                                <h2>Type of money: {item.type}</h2>
                                <h3>{item.amount}</h3>
                                <h4>{item.date}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomePage