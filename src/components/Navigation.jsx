import React from 'react'
import { AiFillHome, AiFillPieChart } from 'react-icons/ai'
import { FaFileExport } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

// import data from '../data/people.json'

const Navigation = () => {
    return (
        <nav>
            <NavLink exact to="/">
                <AiFillHome />
            </NavLink>
            <NavLink to="/analyze">
                <AiFillPieChart />
            </NavLink>
            <span>
                <FaFileExport />
            </span>
            <NavLink to="/temp">
                <AiFillHome />
            </NavLink>
        </nav>
    )
}

export default Navigation
