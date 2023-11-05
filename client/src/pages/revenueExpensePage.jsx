import React, { useState } from 'react'
import "../style/revenueExpense.css"

const RevenueExpensePage = () => {
    const [type, setType] = useState("revenue")
    const [descritpion, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")



    
    return (
        <>
            <div className='container-homepage'>
                <h1 className='heading-rev-exp'>
                    Revenue - Expense
                </h1>
                <form className='form-container-rev-exp' onSubmit={""}>
                    <div className='container-rev-exp'>
                        <select
                            onChange={(event) => setType(event.target.value)}
                        >
                            <option value="revenue">revenue</option>
                            <option value="expense">expense</option>
                        </select>
                        <div className='container-descritpion'>
                            <h3>
                                Description
                            </h3>
                            <input
                                type="text"
                                onChange={(event) => setDescription(event.target.value)}
                            />

                        </div>
                        <div className='container-amount'>
                            <h3>
                                Amount
                            </h3>
                            <input
                                type="number"
                                onChange={(event) => setAmount(event.target.value)}
                            />

                        </div>
                        <input
                            type="date"
                            onChange={(event) => setDate(event.target.value)}
                        />
                        <div className='container-date'>
                            <h3>
                                Date
                            </h3>
                            <p>{date === "" ? "year-month-day" : date}</p>
                        </div>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default RevenueExpensePage