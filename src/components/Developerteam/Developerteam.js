import React, { useEffect, useState } from 'react';
import Developers from './Developers/Developers';
import Cart from './Cart/Cart'

const Developerteam = () => {
    const [developers, setDevelopers] = useState([]);
    const [hiredDeveloper, setHiredDeveloper] = useState([]);
   
    useEffect(() => {
       fetch('./devlist.json')
        .then(res => res.json())
         .then(data => setDevelopers(data))
    }, [])
   
   const handleHire = developer => {
     setHiredDeveloper([...hiredDeveloper, developer])
   }

    return (
        <div className="container-fluid">
          <div className="row">
           <div className="col-12 col-lg-9 developersContainer">
             <Developers developers={developers} handleHire={handleHire}></Developers>
           </div>
           <div className="col-10 col-md-6 mx-auto col-lg-3 mt-5 mt-lg-0 cartContainer">
               <Cart hiredDeveloper={hiredDeveloper}></Cart>
           </div>
          </div>
        </div>
    );
};

export default Developerteam;