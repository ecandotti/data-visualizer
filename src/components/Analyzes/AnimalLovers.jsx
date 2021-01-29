import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

const AnimalLovers = ({ people }) => {
    useEffect(() => {
        let data = [[], []]
        for (let el of people) {
            if (data[0].indexOf(el.preferences.favorite_pet) === -1) {
                data[0].push(el.preferences.favorite_pet)
                data[1].push(1)
            } else {
                data[1][data[0].indexOf(el.preferences.favorite_pet)]++
            }
        }

        const ctx = document.getElementById('animal-lovers')

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data[0],
                datasets: [
                    {
                        label: 'Men / Women',
                        data: data[1],
                        backgroundColor: ['Red', 'Pink', 'Blue', 'Orange'],
                        borderColor: ['Red', 'Pink', 'Blue', 'Orange'],
                        borderWidth: 1,
                        hoverBackgroundColor: ['Red', 'Pink', 'Blue', 'Orange'],
                    },
                ],
            },
        })
    }, [])

    return <canvas id="animal-lovers"></canvas>
}

AnimalLovers.propTypes = {
    people: PropTypes.array.isRequired,
}

export default AnimalLovers
