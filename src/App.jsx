import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(15)
  // let counter = 15

  const addValue = () =>{
    counter = counter + 1
    setcounter(counter)
    console.log("clicked", counter);

   if (counter<=20){
    setcounter(counter + 1)
   }
  }

  const removeValue =() =>{
    counter = counter -1
    setcounter(counter)
    console.log("removed",counter);
 if (counter>0){
  setcounter(counter - 1)
 }

  }

  return (
    <>
   <h1>counter start </h1>
   <h3>counter value {counter}</h3>
      <button onClick={addValue} disabled={counter===20}>add value {counter}</button>
   <br />
   <button onClick={removeValue} disabled={counter===0}>remove value {counter}</button>
    </> 
  )
}
  

export default App
