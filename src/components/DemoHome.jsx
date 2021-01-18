import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './home.css'

function DemoHome(props) {
    const [group, setGroup] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://www.anapioficeandfire.com/api/books?pageSize=30'
        }).then(resp => {
            setGroup(resp.data);
        })
    }, [])
    return (
        <>
            <h1>GOT Flex API</h1><br />
            <div id="container">
                <div id="flex-scroll">
                    {
                        group.map((ele, i) => (
                            <div className=" box col-md-2 mr-4" key={i}>
                                <h1>{ele.authors.map(auth => (
                                    <p className="text-muted small">{auth}</p>
                                ))}</h1><hr />
                                <h4>{ele.country}</h4><hr />
                                <h4>{ele.mediaType}</h4><hr />
                                <h4>{ele.name}</h4><hr />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default DemoHome;