import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { DataContext } from './context/data'

import data from './data/people.json'

import Navigation from './components/Navigation'

import Home from './views/Home'
// import Analyze from './views/Analyze'
import PeopleCard from './views/PeopleCard'

const App = () => {
    const [people, setPeople] = useState(data.people)

    return (
        <div className="container">
            <h1 id="main-title">Data Visualizer 🔬</h1>
            <DataContext.Provider value={{ people, setPeople }}>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route path="/analyze" component={Analyze} /> */}
                        <Route path="/people/:id" component={PeopleCard} />
                        <Route path="*" component={() => '404'} />
                    </Switch>
                </Router>
            </DataContext.Provider>
        </div>
    )
}

export default App
