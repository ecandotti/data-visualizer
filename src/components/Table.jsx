import React from 'react'
import PropTypes from 'prop-types'

import Pagination from './Pagination'
import Card from './Card'

const Table = ({ data, search, totalPage, setCurrentPage, currentPage }) => {
    // search props to know if data props is from result of search or not
    return (
        <div className="table-people">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>Country, City</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {search
                        ? data.map((people, key) => (
                              <Card key={key} people={people.item} />
                          ))
                        : data.map((people, key) => (
                              <Card key={key} people={people} />
                          ))}
                </tbody>
            </table>
            <Pagination
                totalPage={totalPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                search={search}
            />
        </div>
    )
}

Table.propTypes = {
    data: PropTypes.any,
    search: PropTypes.bool,
    totalPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number,
}

export default Table
