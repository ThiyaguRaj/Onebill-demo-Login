import React from 'react';
import Jpro from './ProList.json'
import './demo.css';

function ProDisplay(props) {
    return (
        <div className="container">
            {
                Jpro.map((ele,i)=>(
                    <div key={i} className="ele">
                        <img src={ele.image} alt="images"/>
                    </div>
                ))
            }
        </div>
    );
}

export default ProDisplay;