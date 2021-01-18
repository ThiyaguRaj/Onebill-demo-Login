import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dash from '../Drawer';
import '../home.css'
import './login.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Login(props) {
    const classes = useStyles();
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("user"))) {
            document.getElementById('email').focus();
        }
    }, [])

    const handleMail = (event) => {
        setMail(event.target.value)
    }

    const handlePass = (event) => {
        setPass(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (mail !== "" && pass !== "") {
            let obj = {
                email: mail,
                password: btoa(pass)
            }
            localStorage.setItem("user", JSON.stringify(obj));
            props.history.push({
                pathname: "/dashboard"
            })
        } else {
            const err = document.getElementById('errmsg')
            if (mail === "") {
                err.innerHTML = "Mail ID should not be null"
            } else {
                err.innerHTML = "Password should not be null"
            }
        }
    }
    if (JSON.parse(localStorage.getItem("user"))) {
        return (
            <>
                <Dash />
            </>
        )
    } else {
        return (
            <>
                <div className="row" id="rowid">
                    <div className="col-md-5 m-auto">
                        <div className="p-5">
                            <h2 className="logtext">Login</h2>
                            <p><small className="text-light">Login now to Enter into the Subscribtion world</small></p>
                        </div>
                    </div>
                    <div className="col-md-7 bg-light">
                        <Alert variant="danger" className="mt-3" >
                            <Alert.Heading className="text-center"><small><small> <small id="errmsg">Enter Login details Below !!</small></small></small></Alert.Heading>
                        </Alert>
                        <form className={classes.root} validate autoComplete="off" id="mform" onSubmit={submitHandler}>
                            <TextField id="email" className="" label="Enter Email" type="email" onChange={handleMail} /><br />
                            <TextField id="pwd" label="Enter Password" type="password" onChange={handlePass} /><br />
                            <Button variant="contained" className="log mt-4" size="small" type="submit">Login</Button><hr />
                            <p className="mt-4"><small className="text-muted">New to OneBill ? <Link className="reg text-primary" >Register</Link> now</small></p>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Login);