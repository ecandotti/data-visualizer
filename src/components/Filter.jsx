import React, { useState } from 'react'

import { useData } from '../context/dataContext'
import Table from './Table'

const Filter = () => {
    const { people } = useData()

    const [value, setValue] = useState('')

    let gender = []
    for (let el of people) {
        if (gender.indexOf(el.gender) === -1) {
            gender.push(el.gender)
        }
    }

    const result = people.filter((word) => word.gender === value)

    return (
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
            <h2>Préférence</h2>
            <span>Choose gender : </span>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                <option value=""></option>
                {gender.map((item, key) => (
                    <option key={key} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            {value && <Table data={result} />}
        </div>
    )
}

export default Filter
