import React,{useState} from 'react'

function Counter() {
 
  const [Count,setCount] = useState(0);

     const increment = ()=> 
     {
         setCount(Count + 1)
     }
     const decrement = ()=> 
        {
            setCount(Count - 1)
        }
        const reset = ()=>
        {
            setCount(0)
        }
    return (
    <div>

  <h1> React  Web </h1>
 
  <h1> {Count}</h1>
    <button onClick={increment} style={{ margin:15}}> Increment</button>
    <button onClick={decrement} style={{ margin:15}}>  Decrement </button>
    <button onClick={reset} style={{ margin:15}}> Reset</button>
  
    </div>
  )
}

export default Counter