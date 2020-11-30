import { Router } from 'react-router-dom'
import App from './App'
import { createBrowserHistory } from 'history'
const root = document.getElementById('app')

ReactDOM.render(<React.StrictMode>
    <Router history={createBrowserHistory()} >
        <App/>
    </Router>
</React.StrictMode>, root)