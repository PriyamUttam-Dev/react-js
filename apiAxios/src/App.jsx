import { useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
 const [data,setData]= useState([])
const getData = async () => {
  const response =await axios.get('https://picsum.photos/v2/list')
  setData(response.data)

}
 
  

  return (
    <>
     <div className=' py-5 px-6 flex'>
      <button className='bg-green-400 py-5 px-6 rounded-xl' onClick={getData}>Get Data </button>
     </div>
     <div>
      {data.map(function(elem,idx){
        return <div key={idx} className='bg-emerald-100 h-40 m-2 flex  justify-between rounded-full'>
           <img className='rounded-full' src={elem.download_url} alt="" />
           <h1 className='flex flex-col justify-center p-5'>{elem.author}</h1>
          
        </div>
      })}
     </div>
    </>
  )
}

export default App
