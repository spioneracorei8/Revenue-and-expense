import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/homePage'
import RevenueExpenseFormPage from './pages/revenueExpenseFormPage'
import RevenueExpenseRemovePage from './pages/revenueExpenseRemovePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/form-revenue-expense' element={<RevenueExpenseFormPage />} />
        <Route path='/remove-revenue-expense' element={<RevenueExpenseRemovePage />} />
      </Routes>
    </>
  )
}

export default App