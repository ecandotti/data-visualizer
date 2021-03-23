import React from 'react'

import { useData } from '../context/dataContext'

import Gender from '../components/Graphics/Gender'
import AnimalLovers from '../components/Graphics/AnimalLovers'

const Graphics = () => {
    const { people } = useData()

    return (
        <>
            <h2 className="filter-title" style={{ marginBottom: '20px' }}>
                Graphics
            </h2>
            <div className="chart">
                <div className="chart-item">
                    <h3>Gender</h3>
                    <Gender people={people} />
                </div>
                <div className="chart-item">
                    <h3>Animal Lovers</h3>
                    <AnimalLovers people={people} />
                </div>
            </div>
        </>
    )
}

export default Graphics
