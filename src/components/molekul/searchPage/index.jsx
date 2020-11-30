import React, { useState } from "react"
import Button from "../../atom/button/Button"
import Input from "../../atom/input/Input"
import PropTypes from "prop-types"

const SearchPage = ({ searchText }) => {

    const [stateF, setStateF] = useState("")

    const tournState = (e) => {
        setStateF(e.target.value)
    }

    const changeMainState = (e) => {
        e.preventDefault()
        searchText(stateF)
    }


    return (
        <form>
            <div className="wrap">
                <Input placeholder="Search...." value={stateF} onChange={tournState} />
                <Button onClick={changeMainState} />
            </div>
        </form>
    )
}
SearchPage.propTypes = {
    searchText: PropTypes.func
}



export default SearchPage