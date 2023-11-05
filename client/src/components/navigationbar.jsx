import React from 'react'
import "../style/navigationbar.css"
import { Link } from "react-router-dom"

const Navigationbar = () => {
    return (
        <div className='container-navigationbar'>
            <ul className='menu-navigationbar'>
                <li>
                    <Link to={"/"}>
                        All Revenue-Expense
                    </Link>
                </li>
                <li>
                    <Link to={"/form-revenue-expense"}>
                        Add new Revenue-Expense
                    </Link>
                </li>
                <li>
                    Delete Revenue-Expense
                </li>
            </ul>
        </div>
    )
}

export default Navigationbar