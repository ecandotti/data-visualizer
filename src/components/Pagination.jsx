import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ totalPage, setCurrentPage }) => {
    let PaginationRow = []
    for (let i = 1; i <= totalPage; i++) {
        PaginationRow.push(
            <li key={i} onClick={() => setCurrentPage(i)}>
                {i}
            </li>
        )
    }
    return <ul className="pagination">{PaginationRow}</ul>
}

Pagination.propTypes = {
    totalPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
}

export default Pagination
