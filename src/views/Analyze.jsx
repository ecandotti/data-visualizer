import React from 'react'

import data from '../data/people.json'

import MenWomen from '../components/Analyzes/MenWomen'
import AnimalLovers from '../components/Analyzes/AnimalLovers'

const Analyze = () => {
    const people = data.people

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
