import React, { useState } from 'react'
import Fuse from 'fuse.js'

import { useData } from '../context/dataContext'

import Table from '../components/Table'
import Search from '../components/Search'
import Filter from '../components/Filter'

const Home = () => {
    const { people } = useData()

    // >>> Search function using FuseJS
    const [name, setName] = useState('')
    const fuse = new Fuse(people, {
        keys: ['firstname', 'lastname', 'contact.city', 'contact.country'],
    })

    const fuseSearch = fuse.search(name)
    // <<< Search function using FuseJS

    // >>> Pagination system
    const [peoplePerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastPeople = currentPage * peoplePerPage
    const indexOfFirstPeople = indexOfLastPeople - peoplePerPage
    // <<< Pagination system

    let peopleSelected = []
    let result

    if (name.length > 2) {
        // If search exist (with 3 letters minimum)
        peopleSelected = fuseSearch.slice(indexOfFirstPeople, indexOfLastPeople)
        result = (
            <Table
                data={peopleSelected}
                totalPage={fuseSearch.length / peoplePerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                search={true}
            />
        )
    } else {
        // Else, show all people
        peopleSelected = people.slice(indexOfFirstPeople, indexOfLastPeople)
        result = (
            <Table
                data={peopleSelected}
                totalPage={people.length / peoplePerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                search={false}
            />
        )
    }
    // >>> Pagination system

    return (
        <div className="home">
            <Search setName={setName} name={name} />
            <Filter />
            {result}
        </div>
    )
}

export default Home
