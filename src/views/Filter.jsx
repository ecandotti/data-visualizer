import React from 'react'

import { useData } from '../context/dataContext'

import MenWomen from '../components/Filters/MenWomen'
import AnimalLovers from '../components/Filters/AnimalLovers'

const Analyze = () => {
    const { people } = useData()

    return (
        <>
            <h2>Analyze</h2>
            <div className="chart">
                <div className="chart-item">
                    <h3>Men / Women</h3>
                    <MenWomen people={people} />
                </div>
                <div className="chart-item">
                    <h3>Animal Lovers</h3>
                    <AnimalLovers people={people} />
                </div>
            </div>
        </>
    )
}

export default Analyze
