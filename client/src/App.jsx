import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/homePage'
import RevenueExpenseFormPage from './pages/revenueExpenseFormPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/form-revenue-expense' element={<RevenueExpenseFormPage />} />
      </Routes>
    </>
  )
}

export default App