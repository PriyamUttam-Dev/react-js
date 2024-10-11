import { useState } from 'react'
import './App.css'
import {useContext} from 'react'
import { DataContext } from './context/Usercontext'

function App() {
  const Data =  useContext(DataContext)
  console.log(Data)
  return (
    <>
    <div>
      <h1>{Data}</h1>
      </div>
      
    </>
  )
}

export default App
