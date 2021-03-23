import React from 'react'
import PropTypes from 'prop-types'
import { BiSearch } from 'react-icons/bi'

const Search = ({ setName, name }) => {
    // Search bar child component, work with fuseJS (parent component)
    return (
        <>
            <small style={{ color: 'gray' }}>
                3 letters minimum (firstname, lastname, city, country)
            </small>
            <div className="search-bar">
                <BiSearch />
                <input
                    type="text"
                    value={name}
                    placeholder="Search people"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </>
    )
}

Search.propTypes = {
    setName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default Search
