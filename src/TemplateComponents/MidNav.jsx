import React from 'react';
import data from './template.json';
import One from './LoginOne/Login';
import Two from './LoginTwo/Login';
import Default from '../components/Login/Login'

function MidNav(props) {
    switch (data.template) {
        case  "one": return <One/>    
        case  "two": return <Two/>    
        default: return <Default/>
    }
}

export default MidNav;