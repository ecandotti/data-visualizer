import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

const MenWomen = ({ people }) => {
    // Before component is mounted
    useEffect(() => {
        // Creation of a 2D table
        let data = [[], []]

        // Map all people, check if gender exist, if isn't, add to 1st Dimenstion and increment by 1 in 2nd Dimension
        // If already exist... just increment 2nd Dimension of with the corresponding gender in 1st dimension
        for (let el of people) {
            if (data[0].indexOf(el.gender) === -1) {
                data[0].push(el.gender)
                data[1].push(1)
            } else {
                data[1][data[0].indexOf(el.gender)]++
            }
        }

        const ctx = document.getElementById('men-women')
        // With data collected go use ChartJS :)
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data[0],
                datasets: [
                    {
                        label: 'Men / Women',
                        data: data[1],
                        backgroundColor: ['Blue', 'Pink'],
                        borderColor: ['Blue', 'Pink'],
                        borderWidth: 1,
                        hoverBackgroundColor: ['Blue', 'Pink'],
                    },
                ],
            },
        })
    }, [])

    return <canvas id="men-women"></canvas>
}

MenWomen.propTypes = {
    people: PropTypes.array.isRequired,
}

export default MenWomen
