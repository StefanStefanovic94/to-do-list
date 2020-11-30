import React, { useState } from "react"
import SearchPage from "../../molekul/searchPage";
import TaskList from "../../molekul/taskList";
import ToDoFooter from "../../molekul/toDoFooter/ToDoFooter"
import ToDoHeader from "../../molekul/toDoHeader";
import "./toDo.css"

const ToDo = () => {
    const [taskList, setTaskList] = useState([]);
    console.log("ToDo -> taskList", taskList)
    const [filter, setFilter] = useState("")

    const createTodo = (textInput) => {
        const lista = [...taskList, { name: textInput, isActive: false }]
        setTaskList(lista)
    }

    const deleteItem = (index) => {
        const newArr = [...taskList]
        newArr.splice(index, 1)
        setTaskList(newArr)
    }
    const change = (id) => {
        setTaskList(taskList.map((list, index) => {
            if (id === index) {
                return {
                    ...list,
                    isActive: !list.isActive
                }
            }

            return list
        }))
    }

    const searchText = (text) => {
        setFilter(text)
    }

    const filteredList = taskList.filter((task) => {
        return task.name.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <div className='wraper'>
            <ToDoHeader count={filteredList} />
            <SearchPage searchText={searchText} />
            <TaskList taskList={filteredList} deleteItem={deleteItem} change={change} />
            <ToDoFooter createTodo={createTodo} />
        </div>
    )
}

export default ToDo