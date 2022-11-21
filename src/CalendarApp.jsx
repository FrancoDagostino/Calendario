import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { store } from './store'
import './styles.css'

export const CalendarApp = () => {
  return (
   <>
   <Provider store={store}>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
   </Provider>
   </>
  )
}
