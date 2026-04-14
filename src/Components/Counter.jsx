import { useContext } from "react"
import { CounterContext } from "./context/createContext"

function Counter() {
    const {count,handleadd} = useContext(CounterContext)
    return (
        <div>
            <h1>Count : {count} </h1>
            <button onClick={handleadd}>click to count</button>
        </div>
    )
}

export default Counter