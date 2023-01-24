import { useSelector, useDispatch } from 'react-redux'
import { addToDo, clearToDo } from '../features/toDoSlice'
import { useState } from 'react'

function ToDo () {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()

    const [input, setInput ] = useState('')

    const toDoSubmit = (e) => {
        e.preventDefault()
        dispatch(addToDo(input))
    }

    const renderList = items.map((item, index) => <li key={index}>{item}</li>)//onClick={() => dispatch(removeOne(index))}>{item}</li>)

    console.log(items)


    return (
        <div>
            <form onSubmit={(e) => toDoSubmit(e)}>
                <input type='text' placeholder="To Do" onChange={(e) => setInput(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
            <ul>
                {renderList}
            </ul>
            <button onClick={() => dispatch(clearToDo())}>Clear</button>
        </div>
    )
}

export default ToDo