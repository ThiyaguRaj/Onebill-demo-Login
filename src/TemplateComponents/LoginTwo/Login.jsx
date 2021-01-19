import React, { useEffect } from 'react';
import data from '../template.json';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './log.css'

function Login(props) {

    useEffect(()=>{
        document.getElementById('email').focus();
    },[])

    let tempStyles = {
        color: data.color,
        background: data.background
    }

    return (
        <>
            <div className="card card-body wrap">
                <h3 className="mb-5 mt-4 p-3 nameh" style={tempStyles}>
                    {data.name}
                </h3>
                <form className="" validate autoComplete="off">
                    <TextField id="email" className="mb-3" label="Email" placeholder='"example@gmail.com"'  variant="outlined" type="email" /><br />
                    <TextField id="pwd" label="Password" type="password" placeholder='"A-Z/a-z/0-9/*%$"'  variant="outlined" /><br />
                    <div className="text-center"><Button variant="contained" style={tempStyles} className=" mt-4" size="small" type="submit">Login</Button></div>
                    <p className="mt-4 text-center"><small className="text-muted text-center">New to OneBill ? <Link className="reg text-primary" >Register</Link> now</small></p>
                </form>
            </div>
        </>
    );
}

export default Login;