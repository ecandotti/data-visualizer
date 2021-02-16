import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapPeople = ({ lat, lon, fullname }) => {
    // Leaflet component that shows the position of the person received by PeopleCard component
    return (
        <div>
            <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lon]}>
                    <Popup>{fullname} lives here !</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

MapPeople.propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
}

export default MapPeople
