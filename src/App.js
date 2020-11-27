import { hot } from 'react-hot-loader/root';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import GlobalStyles from './GlobalStyles'

function App() {
    return (
        <Router>
            <GlobalStyles />            
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default hot(App)