import React from 'react';
import './Singledeveloper.css'

const Singledeveloper = ({developer, handleHire}) => {
    const {name,gender,image,email,phone,salary,country} = developer;
    return (
        <div className="singledeveloper">
          <div className="col">
          <div className="card h-100 py-3 text-secondary devcard">
           <img src={image} className="card-img-top devimg" alt="developer"/>
           <div className="card-body text-center">
            <h6>name:  <span className="fw-bold">{name}</span></h6>
            <h6>gender:  <span className="fw-bold">{gender}</span></h6>
            <h6>email:  <span className="fw-bold">{email}</span></h6>
            <h6>phone:  <span className="fw-bold">{phone}</span></h6>
            <h6>salary:  <span className="fw-bold">${salary}</span></h6>
            <h6>country:  <span className="fw-bold">{country}</span></h6>
            <div className="sociallinks my-3">
              <a href="https://github.com/babulakterfsd" target="_blank" rel="noreferrer" className="me-4"><i className="fab fa-github text-secondary"></i></a>
              <a href="https://twitter.com/babulakterfsd" target="_blank" rel="noreferrer" className="me-4"><i className="fab fa-twitter text-secondary"></i></a>
              <a href="https://linkedin.com/in/babulakterfsd" target="_blank" rel="noreferrer"><i className="fab fa-linkedin text-secondary"></i></a>
            </div>
            <button onClick={() => handleHire && handleHire(developer)} className="btn btn-secondary text- px-3 px-lg-4 fw-bold"><i className="fas fa-code me-1"></i>Hire Developer</button>
         </div>
        </div>
       </div>
      </div>
    );
};

export default Singledeveloper;