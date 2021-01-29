import React, { useState } from 'react'

import { useData } from '../context/data'

import Pagination from '../components/Pagination'
import Table from '../components/Table'

const Home = () => {
    const { people } = useData()

    const [peoplePerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastPeople = currentPage * peoplePerPage
    const indexOfFirstPeople = indexOfLastPeople - peoplePerPage
    const peopleSelected = people.slice(indexOfFirstPeople, indexOfLastPeople)
    return (
        <div>
            <Table data={peopleSelected} />
            <Pagination
                totalPage={people.length / peoplePerPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Home
