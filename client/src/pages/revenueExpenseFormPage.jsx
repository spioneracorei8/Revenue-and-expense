import React, { useState } from 'react'
import "../style/revenueExpense.css"
import Navigationbar from '../components/navigationbar'
import useRevenueExpnese from '../hook/useRevenueExpense'

const RevenueExpenseFormPage = () => {

    const { addNewRevenueExpense } = useRevenueExpnese()

    const [type, setType] = useState("revenue")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")

    const handleAddNewRevenueExpense = (event) => {
        event.preventDefault()
        const data = {
            type,
            description,
            amount,
            date
        }
        addNewRevenueExpense(data)
    }

    return (
        <>
            <Navigationbar />

            <form className='form-container-rev-exp' onSubmit={(event) => handleAddNewRevenueExpense(event)}>
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
        </>
    )
}

export default RevenueExpenseFormPage