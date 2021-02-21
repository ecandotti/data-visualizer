import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    FaAddressCard,
    FaUserCircle,
    FaLocationArrow,
    FaPhone,
    FaUserEdit,
    FaSave,
} from 'react-icons/fa'
import { MdPets, MdMovie, MdColorLens } from 'react-icons/md'
import { GiFruitBowl } from 'react-icons/gi'
import { HiMail } from 'react-icons/hi'

import MapPeople from '../components/MapPeople'
import { useData } from '../context/dataContext'

const PeopleCard = ({ match }) => {
    const { id } = match.params
    const { people } = useData()

    let currentPeople = people[id - 1]

    // >>> Contact
    const [firstName, setFirstName] = useState(currentPeople.firstname)
    const [lastName, setLastName] = useState(currentPeople.lastname)
    const [gender, setGender] = useState(currentPeople.gender)
    const [address, setAddress] = useState(currentPeople.contact.address)
    const [country, setCountry] = useState(currentPeople.contact.country)
    const [city, setCity] = useState(currentPeople.contact.city)
    const [phone, setPhone] = useState(currentPeople.contact.phone)
    const [email, setEmail] = useState(currentPeople.contact.email)
    // <<< Contact

    // >>> Preferences
    const [favColor, setFavColor] = useState(
        currentPeople.preferences.favorite_color
    )
    const [favFruit, setFavFruit] = useState(
        currentPeople.preferences.favorite_fruit
    )
    const [favMovie, setFavMovie] = useState(
        currentPeople.preferences.favorite_movie
    )
    const [favPet, setFavPet] = useState(currentPeople.preferences.favorite_pet)
    // <<< Preferences

    // For editMode I just add the disabled property in input tag
    // which depends on the editMode variable (true or false)
    const [editMode, setEditMode] = useState(false)

    // Function that edit information
    const save = () => {
        if (!editMode) {
            setEditMode(!editMode)
        } else {
            // Overwrite data
            currentPeople = {
                id: id,
                firstname: firstName,
                lastname: lastName,
                gender: gender,
                contact: {
                    address: address,
                    country: country,
                    city: city,
                    phone: phone,
                    email: email,
                    location: {
                        lon: currentPeople.contact.location.lon,
                        lat: currentPeople.contact.location.lat,
                    },
                },
                preferences: {
                    favorite_color: favColor,
                    favorite_fruit: favFruit,
                    favorite_movie: favMovie,
                    favorite_pet: favPet,
                },
            }
            console.log(people[id - 1])
            people[id - 1] = currentPeople
            console.log(people[id - 1])
            setEditMode(!editMode)
        }
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-image"></div>
                <div className="card-content">
                    <div className="card-id">ID : {currentPeople.id}</div>
                    <div>
                        <h4>Contact</h4>
                        <ul className="card-contact">
                            <li className="card-item">
                                <FaAddressCard className="card-icon-content" />
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    disabled={!editMode}
                                />
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <FaUserCircle className="card-icon-content" />
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <FaLocationArrow className="card-icon-content" />
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    disabled={!editMode}
                                    style={{ marginLeft: '26px' }}
                                />
                            </li>
                            <li className="card-item">
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    disabled={!editMode}
                                    style={{ marginLeft: '26px' }}
                                />
                            </li>
                            <li className="card-item">
                                <FaPhone className="card-icon-content" />
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <HiMail className="card-icon-content" />
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={!editMode}
                                />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Preferences</h4>
                        <ul className="card-preferences">
                            <li className="card-item">
                                <MdColorLens className="card-icon-content" />
                                <input
                                    type="text"
                                    value={favColor}
                                    onChange={(e) =>
                                        setFavColor(e.target.value)
                                    }
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <GiFruitBowl className="card-icon-content" />
                                <input
                                    type="text"
                                    value={favFruit}
                                    onChange={(e) =>
                                        setFavFruit(e.target.value)
                                    }
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <MdMovie className="card-icon-content" />
                                <input
                                    type="text"
                                    value={favMovie}
                                    onChange={(e) =>
                                        setFavMovie(e.target.value)
                                    }
                                    disabled={!editMode}
                                />
                            </li>
                            <li className="card-item">
                                <MdPets className="card-icon-content" />
                                <input
                                    type="text"
                                    value={favPet}
                                    onChange={(e) => setFavPet(e.target.value)}
                                    disabled={!editMode}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button onClick={() => save()} id="edit">
                        {editMode ? <FaSave /> : <FaUserEdit />}
                    </button>
                    <br />
                    editMode {editMode ? 'enable' : 'desable'}
                </div>
            </div>
            {/* GoogleMap component that shows the position of the person  */}
            <h2 className="location-people-title">📍 Location :</h2>
            <MapPeople
                lon={currentPeople.contact.location.lon}
                lat={currentPeople.contact.location.lat}
            />
        </div>
    )
}

PeopleCard.propTypes = {
    match: PropTypes.object.isRequired,
}

export default PeopleCard
