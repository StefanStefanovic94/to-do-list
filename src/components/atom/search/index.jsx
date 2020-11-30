import React from "react"
import "./search.css"

const Search = ({ searchText }) => {

    const srch = (e) => {
        searchText(e.target.value)
    }

    return (
        <input onChange={srch} className="searchInput" placeholder="search..." type="text"></input>
    )
}

export default Search