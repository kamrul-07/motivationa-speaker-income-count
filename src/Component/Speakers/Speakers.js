import React from 'react';
import './Speakers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Speakers =(props) => {
    const {name,img,age,born,nationality,montlyIncome} =props.speaker;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return(
        <div>
             <div className="col  mt-3 shadow-lg p-3 mb-5 bg-body rounded card">
                <div className="card h-100 card-style">
                   <div>
                   <img src={img} className="card-img-top img-style rounded-circle p-2 " alt=".."/>
                   </div>
                    <div className="card-body">
                       <h3>{name}</h3>
                        <h5>Born:{born}</h5>
                        <h5>Age:{age}</h5>
                        <h5>Nationality:{nationality}</h5>
                       <h5> Montly Income:${montlyIncome}</h5>

                        <button className="p-2 rounded btn btn-secondary" onClick={() => props.handleAddToCart(props.speaker)}>{element}Add to cart</button>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Speakers;