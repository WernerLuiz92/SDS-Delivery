import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
            <h1>Valor do Contador: {counter}</h1>
        </div>
    )
}

export default Counter;