import React, { useState } from 'react'

import { useData } from '../context/dataContext'

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
        <div className="home">
            <Table data={peopleSelected} />
            <div className="home-pagination">
                <Pagination
                    totalPage={people.length / peoplePerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}

export default Home
