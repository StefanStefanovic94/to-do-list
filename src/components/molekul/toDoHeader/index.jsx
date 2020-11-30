import React from "react"
import "./toDoHeader.css"
import PropTypes from "prop-types"

const ToDoHeader = ({ count }) => {
    return (
        <div className="header">
            <h2>You have {count.length} todos</h2>
        </div>
    )
}

ToDoHeader.propTypes = {
    count: PropTypes.instanceOf(Array)
}

export default ToDoHeader