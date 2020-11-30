import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import All from './pages/all'
import Videos from './pages/videos'
import NotFound from './pages/NotFound'
import GlobalStyles from './GlobalStyles'

function App() {
    return (
        <Router>
            <GlobalStyles />            
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/all" component={All} />
                <Route exact path="/videos" component={Videos} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default hot(App)