import React, { useState } from "react"
import Button from "../../atom/button/Button"
import Input from "../../atom/input/Input"
import "./toDoFooter.css"
import PropTypes from "prop-types"

const ToDoFooter = ({ createTodo }) => {
    const [inputValue, setInputValue] = useState("")
    console.log("ToDoFooter -> inputValue", inputValue)

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onTodoCreate = (e) => {
        e.preventDefault()
        createTodo(inputValue)
        setInputValue("")
    }

    return (
        <form>
            <div className="footer">
                <Input value={inputValue} onChange={onInputChange} />
                <Button onClick={onTodoCreate} />
            </div>
        </form>
    )
}

ToDoFooter.propTypes = {
    createTodo: PropTypes.func
}

export default ToDoFooter