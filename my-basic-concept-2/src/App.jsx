import React from 'react'
import ToDoArrayLocalStorage from './components/ToDoArrayLocalStorage'
import ToDoCRUD from './components/ToDoCRUD'
import  SessionDemo  from './components/SessionDemo'
import  SessionLogout from './components/SessionLogout'
import CookiesExample from './components/CookiesExample'
import AxiosFetchDataExample from './components/AxiosFetchDataExample'
import AxiosExamplecreateNewUser from './components/AxiosExamplecreateNewUser'
import WithoutUseMemo from './components/WithoutUseMemo'
const App = () => {
  return (
    <>
      <ToDoArrayLocalStorage />
      <ToDoCRUD/>
      <SessionDemo/>
      <SessionLogout/>
      <CookiesExample/>
      <AxiosFetchDataExample/>
      <AxiosExamplecreateNewUser/>
      <WithoutUseMemo/>

    </>
  )
}

export default App