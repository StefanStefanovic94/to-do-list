import React from "react"
import "./input.css"
import PropTypes from "prop-types"

const Input = ({ value, onChange, placeholder }) => {
    return (
        <div className="input">
            <input placeholder={placeholder} type="text" value={value} onChange={onChange} />
        </div>
    )
}

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}
Input.defaultProps = {
    value: "",
    placeholder: "enter item"

}

export default Input