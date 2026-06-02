import React from 'react'
import ToDoArrayLocalStorage from './components/ToDoArrayLocalStorage'
import ToDoCRUD from './components/ToDoCRUD'
import  SessionDemo  from './components/SessionDemo'
import  SessionLogout from './components/SessionLogout'

const App = () => {
  return (
    <>
      <ToDoArrayLocalStorage />
      <ToDoCRUD/>
      <SessionDemo/>
      <SessionLogout/>

    </>
  )
}

export default App