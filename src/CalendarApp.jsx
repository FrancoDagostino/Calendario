import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import './styles.css'

export const CalendarApp = () => {
  return (
   <>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
   </>
  )
}
