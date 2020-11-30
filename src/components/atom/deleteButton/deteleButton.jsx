import React from "react"
import "./deleteButton.css"
import PropTypes from "prop-types"

const DeleteButton = ({ onClick }) => {
    return (
        <div className="delete">
            <button onClick={onClick}>x</button>
        </div>
    )
}

DeleteButton.propTypes={
    onClick:PropTypes.func
}
export default DeleteButton