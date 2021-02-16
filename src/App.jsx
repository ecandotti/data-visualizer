import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { DataContext } from './context/dataContext'

import Navigation from './components/Navigation'

import Home from './views/Home'
import Filter from './views/Filter'
import PeopleCard from './views/PeopleCard'

const App = () => {
    const [people, setPeople] = useState([])

    // Async function that get all people
    const getContact = async (isReset = false) => {
        // eslint-disable-next-line prettier/prettier
        await fetch('https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7')
            .then((res) => res.json())
            .then((data) => setPeople(data.people))
            .then(isReset && console.log('Data reset'))
    }

    // Before the component is mounted
    useEffect(() => {
        console.log('Updating data...')
        getContact().then(console.log('Data updated'))
    }, [])

    return (
        <div className="container">
            <h1 id="main-title">Data Visualizer 🔬</h1>
            <DataContext.Provider value={{ people, setPeople }}>
                <Router>
                    <Navigation getContact={getContact} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/filter" component={Filter} />
                        <Route path="/people/:id" component={PeopleCard} />
                        <Route path="*" component={() => '404'} />
                    </Switch>
                </Router>
            </DataContext.Provider>
        </div>
    )
}

export default App
