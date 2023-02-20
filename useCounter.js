import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const sumCounter = (value = 1) => { 
        return setCounter((current) => current + value)
    }
    const subsCounter = (value = 1) =>{ 
        if (counter === 0) {
            return;
        }
        return setCounter((current) => current - value)
    }
    const resetCounter = () =>{ 
        return setCounter(initialValue)
    }

    return {
        counter,
        resetCounter,
        subsCounter,
        sumCounter
    }
}