import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Speakers from '../Speakers/Speakers';
import './Project.css'
const Project = () => {
    const [speakers,setSpeakers]=useState([])
    const [total,setTotal]=useState([])
   
    useEffect( () => {
        fetch('./Speakers.JSON')
        .then (res => res.json())
        .then (data => setSpeakers(data));
    },[])

    const handleAddToCart= (speakers) =>{
       const index=  total.indexOf(speakers)
           if(index ===-1){
            const newAdd=[...total,speakers];
            setTotal(newAdd);
           }

        
    }
    return (
        <div className="grid-style ms-1">
            <div className="speakers row row-cols-1 row-cols-md-3 g-2 ">
                {
                    speakers.map(speaker => <Speakers 
                        key={speaker.name}
                        speaker={speaker}
                        handleAddToCart={handleAddToCart}
                        >
                        </Speakers>)
                }
            </div>
            <div className="cart ms-2">
               <Cart cart={total}></Cart>
            </div>
        </div>
    );
};

export default Project;