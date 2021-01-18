import React, { useEffect, useState } from 'react';
import '../home.css'

function Dashboard(props) {
    const[data,setData]=useState({})
    useEffect(()=>{
       setData(JSON.parse( localStorage.getItem("user")));
    },[])
    if(JSON.parse( localStorage.getItem("user"))){ 
        return (
            <>
                <div className="top">
                    <h1>{data.email}</h1>
                    <h1>{data.password}</h1>
                </div>
            </>
        );
    }else{
        return(
            <h5 className="text-center logerr">Please <button className="reg text-primary" id="logerr" onClick={()=>{props.history.push("/")}}>Login</button> to Continue !</h5>
        )
    }
}

export default Dashboard;