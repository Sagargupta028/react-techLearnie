import React from 'react';
// import web from '../src/images/S1.webp'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top"  height="300" width="200" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary">Check Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
