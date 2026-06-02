import React from 'react'
import ToDoArrayLocalStorage from './components/ToDoArrayLocalStorage'
import ToDoCRUD from './components/ToDoCRUD'
import  SessionDemo  from './components/SessionDemo'
import  SessionLogout from './components/SessionLogout'
import CookiesExample from './components/CookiesExample'

const App = () => {
  return (
    <>
      <ToDoArrayLocalStorage />
      <ToDoCRUD/>
      <SessionDemo/>
      <SessionLogout/>
      <CookiesExample/>

    </>
  )
}

export default App