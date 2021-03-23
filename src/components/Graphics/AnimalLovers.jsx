import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

const AnimalLovers = ({ people }) => {
    useEffect(() => {
        // Creation of a 2D table
        let data = [[], []]

        // Map all people, check if favpet exist, if isn't, add to 1st Dimenstion and increment by 1 in 2nd Dimension
        // If already exist... just increment 2nd Dimension of with the corresponding favpet in 1st dimension
        for (let el of people) {
            if (data[0].indexOf(el.preferences.favorite_pet) === -1) {
                data[0].push(el.preferences.favorite_pet)
                data[1].push(1)
            } else {
                data[1][data[0].indexOf(el.preferences.favorite_pet)]++
            }
        }

        const ctx = document.getElementById('animal-lovers')

        // With data collected go use ChartJS :)
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data[0],
                datasets: [
                    {
                        label: 'Gender',
                        data: data[1],
                        backgroundColor: ['Red', 'Pink', 'Blue', 'Orange'],
                        border: 1,
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
