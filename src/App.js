import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Login/Nav';
import MidNav from './TemplateComponents/MidNav';

function App() {
    return (
        <>
            <Router>
                {/* <Nav/> */}
                <MidNav/>
            </Router>

        </>

    );
}

export default App;