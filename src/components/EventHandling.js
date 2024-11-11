import { useState } from "react"

const EventHandling = () =>{
    const [count, setCount] = useState(0)


function handleCount(){
    setCount(count + 1);

}
function handleReset(){
    setCount(0);
}

return (
    <div>
        <h1>Event Handling Example</h1>
        <p>Count: {count}</p>
        <button onClick={handleCount}>Increment</button>
        <button onClick={handleReset}>Reset</button>
    </div>
)
}
export default EventHandling