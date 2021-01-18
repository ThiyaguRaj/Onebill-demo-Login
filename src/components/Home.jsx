import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './home.css'

function Home(props) {
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
            <div className="cont">
                <div className="">
                    {
                        group.map((ele, i) => (
                            <div className="containe card card-body mb-3 col-md-7 ml-auto mr-auto" key={i}>
                                <p><strong>Auther : </strong>{ele.authors[0]}</p>
                                <p><strong>Country : </strong>{ele.country}</p>
                                <p><strong>Type : </strong>{ele.mediaType}</p>
                                <p><strong>Series name : </strong>{ele.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
    );
}

export default Home;