import { useState } from "react";
import { CounterContext } from "./createContext";

export const CounterProvider = ({children}) => {
    const [count,setcount] = useState(0)
    const handleadd = () => {
        setcount(count+1)
    }
    return(
        <CounterContext.Provider value = {{count,handleadd}}>
            {children}
        </CounterContext.Provider>
    )
}