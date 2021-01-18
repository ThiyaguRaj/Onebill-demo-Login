import React from 'react';
import './home.css';
import Plist from '../DemoComps/ProList.json';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function Product(props) {

    return (
        <div className="">
            {
                (Plist && Plist.length > 0) ? Plist.map(pro => (
                    <div keys={pro.id}>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={pro.image} className="clothimg" alt="Dress" />
                            </div>
                            <div className="col-md-9">
                                <h6 className="text-left">{pro.name}</h6>
                                <p className="text-muted mt-4 mb-0">Color - {pro.color}</p>
                                <p className="text-muted mt-0">Size - {pro.size}</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <Button variant="contained" className="buy mb-3" size="small">
                                            Buy
                                        </Button>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button className="wish text-muted"><FavoriteBorderIcon className="hrt mr-2" /> Wishlist</button>
                                    </div>
                                    <div className="col-md-4">
                                        <Button variant="outlined" color="primary" size="small" className="viewbtn">
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div><hr />

                    </div>
                )) : <h1>Failed</h1>
            }
        </div>
    );
}

export default Product;