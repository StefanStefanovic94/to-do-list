import React from "react"

const CheckBox = ({ state,check }) => {
    return (
        <input onChange={check} type="checkbox" checked={state} ></input>
    )
}
export default CheckBox