import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import PeopleCard from './components/PeopleCard'
import Temp from './views/Temp'

import Home from './views/Home'
import Analyze from './views/Analyze'

const App = () => {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>Data Visualizer 🔬</h1>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/analyze" component={Analyze} />
                    <Route path="/temp" component={Temp} />
                    <Route path="/people/:id" component={PeopleCard} />
                    <Route path="*" component={() => '404'} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
