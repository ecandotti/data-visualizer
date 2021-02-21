import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Fuse from 'fuse.js'

import { useData } from '../context/dataContext'

import Pagination from '../components/Pagination'
import Table from '../components/Table'

const Home = () => {
    const { people } = useData()

    // >>> Search function using FuseJS
    const [name, setName] = useState('')
    const fuse = new Fuse(people, {
        keys: ['firstname', 'lastname'],
        includeScore: true,
    })

    const results = fuse.search(name)
    // <<< Search function using FuseJS

    // >>> Pagination system
    const [peoplePerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastPeople = currentPage * peoplePerPage
    const indexOfFirstPeople = indexOfLastPeople - peoplePerPage
    const peopleSelected = people.slice(indexOfFirstPeople, indexOfLastPeople)
    // >>> Pagination system

    return (
        <div className="home">
            <div className="search-bar">
                <BiSearch />
                <input
                    type="text"
                    value={name}
                    placeholder="Search people"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {
                // If search exist (with 2 letters minimum)
                name.length > 2 ? (
                    <Table data={results} search={true} />
                ) : (
                    // Else, show all people
                    <>
                        <Table data={peopleSelected} />
                        <div className="home-pagination">
                            <Pagination
                                totalPage={people.length / peoplePerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                search={false}
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Home
