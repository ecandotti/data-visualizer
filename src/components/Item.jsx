import React from 'react'
import PropTypes from 'prop-types'
import { GiFemale, GiMale } from 'react-icons/gi'
import { FaAddressCard } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Item = ({ people }) => {
    return (
        <tr>
            <td>{people.id}</td>
            <td>
                {people.firstname} {people.lastname}
            </td>
            <td>{people.gender === 'Female' ? <GiFemale /> : <GiMale />}</td>
            <td>
                {people.contact.country}, {people.contact.city}
            </td>
            <td>
                <NavLink to={`/people/${people.id}`}>
                    <FaAddressCard />
                </NavLink>
            </td>
        </tr>
    )
}

Item.propTypes = {
    people: PropTypes.object.isRequired,
}

export default Item
