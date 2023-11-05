import React from 'react'
import "../style/navigationbar.css"
import { Link } from "react-router-dom"

const Navigationbar = () => {
    return (
        <div className='container-navigationbar'>
            <ul className='menu-navigationbar'>
                <li>
                    <Link to={"/"}>
                        Revenue-expense history
                    </Link>
                </li>
                <li>
                    <Link to={"/form-revenue-expense"}>
                        Add new revenue-expense
                    </Link>
                </li>
                <li>
                    <Link to={"/remove-revenue-expense"}>
                        Remove revenue-rxpense history
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigationbar