import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

const Table = ({ data, search }) => {
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
                        ? data.map((people) => (
                              <Item key={people.item.id} people={people.item} />
                          ))
                        : data.map((people) => (
                              <Item key={people.id} people={people} />
                          ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    data: PropTypes.any,
    search: PropTypes.bool,
}

export default Table
