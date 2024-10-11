import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const users = [
    {
      "name": "John Doe",
      "address": "123 Main Street, Anytown, USA",
      "age": 30
    },
    {
      "name": "Jane Smith",
      "address": "456 Oak Avenue, Somewhere, USA",
      "age": 25
    },
    {
      "name": "Michael Johnson",
      "address": "789 Elm Street, Anywhere, USA",
      "age": 40
    },
    {
      "name": "Emily Davis",
      "address": "101 Pine Lane, Everywhere, USA",
      "age": 35
    },
    {
      "name": "David Wilson",
      "address": "202 Maple Drive, Nowhere, USA",
      "age": 50
    }
  ]

  return (
    <>
    <div className='h-40 w-50'>
      {users.map(function(elem,idx){
        return <Card key = {idx} username = {elem.name} address={elem.address} age = {elem.age} />
     
     })}
    </div>
      
    </>
  )
}

export default App
