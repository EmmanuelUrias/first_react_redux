import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementCustom } from '../features/counterSlice'
import { useState } from 'react'

function Counter() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.value)
    // And include the useDispatch hook...
    const dispatch = useDispatch()

    const [input, setInput ] = useState(0)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementCustom(Number(input)))
    }

    return (
        <div>
            <div>
            <h1>
                {count}
            </h1>
            </div>
            <div>
                 <button onClick={() => dispatch(increment())}>increment</button>
                 <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
            <div>
                <form onSubmit={(e) => byAmountSubmit(e)}>
                     <input type='number' placeholder="Custom Value" onChange={(e) => setInput(e.target.value)}></input>
                     <button type='submit'>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Counter

