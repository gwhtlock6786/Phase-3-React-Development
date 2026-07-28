import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

function incrementCount(){
    setCount(count +1);
}


  return (
    <div>
        <h2>Current Count: {count}</h2>
        <button type="button" onClick={incrementCount}>Add 1</button>
    </div>
  )
}

export default Counter