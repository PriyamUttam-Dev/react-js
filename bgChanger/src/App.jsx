import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  

  return (
    <>
     <div className="w-full h-screen " style={{backgroundColor : color}}>
      <div className='fixed h-14 bottom-2 rounded-xl bg-white w-full flex justify-between gap-4 items-center px-4 py-2'>
        <button onClick={() => setColor("red")} className='w-16 bg-red-600 h-8 rounded-xl '>Red</button>
        <button onClick={() => setColor("blue")} className='w-16 bg-blue-400 h-8 rounded-xl '>Blue</button>
        <button onClick={() => setColor("gray")} className='w-16 bg-gray-500 h-8 rounded-xl '>Gray</button>
        <button onClick={() => setColor("black")} className='w-16 bg-black h-8 rounded-xl text-white'>Black</button>
        <button onClick={() => setColor("purple")} className='w-16 bg-purple-500 h-8 rounded-xl '>Purple</button>
        <button onClick={() => setColor("pink")} className='w-16 bg-pink-500 h-8 rounded-xl '>Pink</button>
      </div>
     </div> 
    </>
  )
}

export default App
