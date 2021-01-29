import React from 'react'
import PropTypes from 'prop-types'
import {
    FaAddressCard,
    FaUserCircle,
    FaLocationArrow,
    FaPhone,
} from 'react-icons/fa'
import { MdPets, MdMovie, MdColorLens } from 'react-icons/md'
import { GiFruitBowl } from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'

import data from '../data/people.json'

const PeopleCard = () => {
    const people = data.people[1]
    console.log(people)
    return (
        <div className="container">
            <div className="card">
                <div className="card-image">IMG</div>
                <div className="card-content">
                    <div>ID : {people.id}</div>
                    <div>
                        <h4>Contact</h4>
                        <ul className="card-contact">
                            <li>
                                <FaAddressCard />
                                {people.firstname} {people.lastname}
                            </li>
                            <li>
                                <FaUserCircle />
                                {people.gender}
                            </li>
                            <li>
                                <FaLocationArrow />
                                {people.contact.address} -{' '}
                                {people.contact.country}, {people.contact.city}{' '}
                                <br />
                                See {people.gender === 'Male'
                                    ? 'his'
                                    : 'her'}{' '}
                                location
                            </li>
                            <li>
                                <FaPhone />
                                {people.contact.phone}
                            </li>
                            <li>
                                <HiMail />
                                {people.contact.email}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Preferences</h4>
                        <ul className="card-preferences">
                            <li>
                                <MdColorLens />
                                {people.preferences.favorite_color}
                            </li>
                            <li>
                                <GiFruitBowl />
                                {people.preferences.favorite_fruit}
                            </li>
                            <li>
                                <MdMovie />
                                {people.preferences.favorite_movie}
                            </li>
                            <li>
                                <MdPets />
                                {people.preferences.favorite_pet}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// PeopleCard.propTypes = {
//     match: PropTypes.object.isRequired,
// }

export default PeopleCard
