import React from 'react'
import { AiFillHome, AiFillPieChart } from 'react-icons/ai'
import { FaFileExport } from 'react-icons/fa'
import { TiArrowBack } from 'react-icons/ti'
import { NavLink, useHistory } from 'react-router-dom'
import { useData } from '../context/dataContext'

const Navigation = () => {
    const { people } = useData()
    const history = useHistory()
    const throwBack = () => {
        history.goBack()
    }

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
            <NavLink exact to="/">
                <AiFillHome />
            </NavLink>
            <NavLink to="/analyze">
                <AiFillPieChart />
            </NavLink>
            <a id="download" onClick={() => exportFiles()}>
                <FaFileExport />
            </a>
            <a
                onClick={() => throwBack()}
                style={{ backgroundColor: '#3498db' }}
            >
                <TiArrowBack />
            </a>
        </nav>
    )
}

export default Navigation
