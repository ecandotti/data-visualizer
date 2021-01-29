import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

const Table = ({ data }) => {
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
                    {data.map((people) => (
                        <Item key={people.id} people={people} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    data: PropTypes.any,
}

export default Table
