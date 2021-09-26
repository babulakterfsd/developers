import React, { useEffect, useState } from 'react';
import Developers from './Developers/Developers';
import Cart from './Cart/Cart'

const Developerteam = () => {
    const [developers, setDevelopers] = useState([]);
   
    useEffect(() => {
       fetch('./devlist.json')
        .then(res => res.json())
         .then(data => setDevelopers(data))
    }, [])

    return (
        <div className="container-fluid">
          <div className="row">
           <div className="col-12 col-lg-9 developersContainer">
             <Developers developers={developers}></Developers>
           </div>
           <div className="col-12 col-lg-3 cartContainer">
               <Cart></Cart>
           </div>
          </div>
        </div>
    );
};

export default Developerteam;