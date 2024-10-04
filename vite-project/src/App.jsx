import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
   }
   const decValue = () => {
    setCount(count - 1)
   }
    
    
  //  function checkValue (count){
  //   if(count == 0 || count <= 20){
  //     addValue()
  //   }
  //   else{
  //     decValue()
  //   }
  // }

}


return (
  <>
    <h1>My Count{count}</h1>
    <button onClick={addValue}>Add value {count}</button>
    <br />
    <button onClick={decValue}>remove value {count}</button>
  </>
)


export default App

