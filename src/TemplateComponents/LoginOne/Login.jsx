import React,{useEffect} from 'react';
import data from '../template.json';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login(props) {

    useEffect(() => {
        document.getElementById('email').focus();
    }, [])

    let tempStyles = {
        color: data.color,
        background: data.background,
        borderRight: "1px solid " + data.background
    }

    return (
        <>
            <div className="row" style={tempStyles} id="rowid">
                <div className="col-md-5 m-auto">
                    <div className="p-5">
                        <h2 className="logtext">{data.name}</h2>
                        <p><small className="text-light">{data.description}</small></p>
                    </div>
                </div>
                <div className="col-md-7 bg-light">
                    <Alert variant="danger" style={tempStyles} className="mt-3" >
                        <Alert.Heading className="text-center"><small><small> <small id="errmsg">Enter Login details Below !!</small></small></small></Alert.Heading>
                    </Alert>
                    <form className="" validate autoComplete="off" id="mform">
                        <TextField id="email" className="mb-4" label="Email" placeholder='"example@gmail.com"' type="email" /><br />
                        <TextField id="pwd" label="Password" type="password" placeholder='"A-Z/a-z/0-9/*%$"' /><br />
                        <div className="text-center"><Button variant="contained" style={tempStyles} className=" mt-4" size="small" type="submit">Login</Button></div>
                        <p className="mt-4 text-center"><small className="text-muted text-center">New to OneBill ? <Link className="reg text-primary" >Register</Link> now</small></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;