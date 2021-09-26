import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let name="";
   

    for (const speaker of cart){
        total=total + speaker.montlyIncome;
            name=name + ","+ speaker.name;
        }

    return (
        <div className="mt-3 ms-3 sticky-top">
            <div class="col">
               <div class="card">
               <h5>Persons Added:{props.cart.length}</h5>
               <h5>Total:${total.toFixed(2)}</h5>
               <ul style={{ listStyle: 'none' }}>{
                   cart.map(person => <li
                   key={person.name}  className="fw-bold fs-5 border border-3 rounded-3 border-info mb-2"
                   >{person.name}
                   </li>
                    )
                   }</ul>
                
               </div>
            </div>
        </div>
    );
};

export default Cart;