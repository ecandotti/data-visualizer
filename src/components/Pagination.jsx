import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ totalPage, setCurrentPage, currentPage }) => {
    let PaginationRow = []
    for (let i = 1; i <= totalPage; i++) {
        PaginationRow.push(
            <li
                className={`${currentPage === i && 'pagination-active'}`}
                key={i}
                onClick={() => {
                    setCurrentPage(i)
                }}
            >
                {i}
            </li>
        )
    }
    return <ul className="home-pagination pagination">{PaginationRow}</ul>
}

Pagination.propTypes = {
    totalPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
}

export default Pagination
