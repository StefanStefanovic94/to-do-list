import React from "react"
import "./button.css"
import PropTypes from "prop-types"

const Button = ({ onClick }) => {
    return (
        <div>
            <button className="button" onClick={onClick}>submit</button>
        </div>
    )
}
Button.propTypes = {
    onClick: PropTypes.func
}
Button.defaultProps={

}
export default Button