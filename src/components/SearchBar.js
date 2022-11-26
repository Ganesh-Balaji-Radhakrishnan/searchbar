import { useState } from "react"
import "./SearchBar.css"

const SearchBar = ({onClick}) => {
    const [word, setWord] = useState('')

    const onChange = (e) => {
        setWord(e.target.value.replace(/[0-9]/, ''))
    }

    const handleChange = (e) => {
        e.preventDefault()
        onClick(word)
    }

    return <div className="search-bar">
        <form onSubmit={handleChange}>
            <label>Enter your search</label>
        <input value={word} onChange={onChange}/>
        </form>
         </div>
}

export default SearchBar