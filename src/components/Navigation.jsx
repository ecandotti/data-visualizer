import React from 'react'
import PropTypes from 'prop-types'
import { AiFillHome, AiFillPieChart } from 'react-icons/ai'
import { FaFileExport } from 'react-icons/fa'
import { TiArrowBack } from 'react-icons/ti'
import { NavLink, useHistory } from 'react-router-dom'

import { useData } from '../context/dataContext'

const Navigation = ({ getContact }) => {
    const { people } = useData()

    const history = useHistory()

    // Thanks to History Hook, is a function that go back to previously route used
    const throwBack = () => {
        history.goBack()
    }

    // Function that download data.json edited
    const exportFiles = () => {
        const filename = 'data.json'
        const jsonStr = JSON.stringify(people)
        let element = document.getElementById('download')
        element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr)
        )
        element.setAttribute('download', filename)
    }

    return (
        <nav>
            <NavLink exact to="/" className="nav-item">
                <AiFillHome />
            </NavLink>
            <NavLink to="/filter" className="nav-item">
                <AiFillPieChart />
            </NavLink>
            <a className="nav-item" id="download" onClick={() => exportFiles()}>
                <FaFileExport />
            </a>
            <a
                className="nav-item"
                onClick={() => throwBack()}
                style={{ backgroundColor: 'red' }}
            >
                <TiArrowBack />
            </a>
            <a
                className="nav-item"
                onClick={() => getContact(true)}
                style={{ backgroundColor: '#3498db' }}
            >
                Reset
            </a>
        </nav>
    )
}

Navigation.propTypes = {
    getContact: PropTypes.func.isRequired,
}

export default Navigation
