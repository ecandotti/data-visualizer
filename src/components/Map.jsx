import React from 'react'
import PropTypes from 'prop-types'
import config from '../config.json'

const MapPeople = ({ lat, lon }) => {
    const { KEY } = config
    return (
        <>
            <a
                href={`https://www.google.com/maps/embed/v1/view?key=${KEY}&center=${lat},${lon}&zoom=14`}
                rel="noreferrer"
                target="_blank"
            >
                See on Google Maps
            </a>
            <iframe
                className="google-map-iframe"
                src={`https://www.google.com/maps/embed/v1/view?key=${KEY}&center=${lat},${lon}&zoom=14`}
            ></iframe>
        </>
    )
}

MapPeople.propTypes = {
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
}

export default MapPeople
