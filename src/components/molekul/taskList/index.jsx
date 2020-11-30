import React from "react"
import Task from "../../atom/task/index"
import "./toList.css"
import PropTypes from "prop-types"

const TaskList = ({ taskList, deleteItem, change }) => {
    return (
        <div>
            <ul>
                {taskList.map((task, index) => {
                    return (
                        <Task task={task.name} id={index} deleteItem={deleteItem} isActive={task.isActive} change={change} />
                    )
                })}
            </ul>
        </div>
    )
}

TaskList.propTypes = {
    taskList: PropTypes.instanceOf(Array)
}

TaskList.propTypes = {
    deleteItem: PropTypes.func
}
export default TaskList