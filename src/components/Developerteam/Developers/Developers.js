import React from 'react';
import Singledeveloper from './Singledeveloper/Singledeveloper';

//collecting data from parent and generating card based on data
const Developers = (props) => {
    const {developers,handleHire} = props;
    return (
        <div className="developersContainer row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {developers.map((developer,index) => <Singledeveloper key={index} developer={developer} handleHire={handleHire}></Singledeveloper>)}
        </div>
    );
};

export default Developers;