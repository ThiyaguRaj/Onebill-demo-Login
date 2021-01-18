import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Login/Nav';

function App() {
    return (
        <>
            <Router>
                <Nav/>
            </Router>

        </>

    );
}

export default App;