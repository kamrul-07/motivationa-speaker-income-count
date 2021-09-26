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
               <h5>Total:${total}</h5>
                <h5><div className="border border-primary">{name}</div></h5>
                
               </div>
            </div>
        </div>
    );
};

export default Cart;