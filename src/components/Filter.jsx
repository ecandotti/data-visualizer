import React, { useEffect, useState } from 'react'

import { useData } from '../context/dataContext'

const Filter = () => {
    const { initialData, setPeople, people } = useData()

    const [genderValue, setGenderValue] = useState('')

    let gender = []
    for (let el of initialData) {
        if (gender.indexOf(el.gender) === -1) {
            gender.push(el.gender)
        }
    }

    const [fruitValue, setFruitValue] = useState('')

    let fruit = []
    for (let el of initialData) {
        if (fruit.indexOf(el.preferences.favorite_fruit) === -1) {
            fruit.push(el.preferences.favorite_fruit)
        }
    }

    // When fruitValue's value change, useEffect react
    useEffect(() => {
        if (fruitValue === '') {
            setPeople(initialData)
        } else {
            // If genderValue exist, we add gender condition else not
            if (people && genderValue) {
                // Store filter result in people variable
                setPeople(
                    initialData.filter(
                        (word) =>
                            word.gender === genderValue &&
                            word.preferences.favorite_fruit === fruitValue
                    )
                )
            } else {
                setPeople(
                    initialData.filter(
                        (word) => word.preferences.favorite_fruit === fruitValue
                    )
                )
            }
        }
    }, [fruitValue])

    // When genderValue's value change, useEffect react
    useEffect(() => {
        if (genderValue === '') {
            setPeople(initialData)
        } else {
            // If fruitValue exist, we add fruit condition else not
            if (people && fruitValue) {
                // Store filter result in people variable
                setPeople(
                    initialData.filter(
                        (word) =>
                            word.gender === genderValue &&
                            word.preferences.favorite_fruit === fruitValue
                    )
                )
            } else {
                setPeople(
                    initialData.filter((word) => word.gender === genderValue)
                )
            }
        }
    }, [genderValue])

    return (
        <div className="filter-container">
            <h2 className="filter-title">Préférence</h2>
            <div className="filter-menu">
                <div className="filter-item">
                    <span>Choose gender : </span>
                    {/* Map all type of gender [array] and display in option tag */}
                    <select
                        value={genderValue}
                        onChange={(e) => setGenderValue(e.target.value)}
                    >
                        <option value=""></option>
                        {gender.map((item, key) => (
                            <option key={key} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                    <span>Choose fruit : </span>
                    {/* Map all type of fruit [array] and display in option tag */}
                    <select
                        value={fruitValue}
                        onChange={(e) => setFruitValue(e.target.value)}
                    >
                        <option value=""></option>
                        {fruit.map((item, key) => (
                            <option key={key} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter
