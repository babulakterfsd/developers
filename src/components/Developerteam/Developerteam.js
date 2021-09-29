import React, { useEffect, useState } from "react";
import Developers from "./Developers/Developers";
import Cart from "./Cart/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// developers and cart both component are rendered from here
const Developerteam = () => {
  const [developers, setDevelopers] = useState([]);
  const [hiredDeveloper, setHiredDeveloper] = useState([]);

  //fetching json data from external resource
  useEffect(() => {
    fetch("./devlist.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  const notify = () => toast("Wow! Developer Hired!", { theme: "dark" });
  const notifyError = () => toast.error("This Developer Is Already Hired!");
  const handleHire = (developer) => {
    setHiredDeveloper([...new Set([...hiredDeveloper, developer])]);
    //toastify
    for (const object of hiredDeveloper) {
      if (object.id === developer.id) {
        notifyError();
        return;
      }
    }
    notify();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-9 developersContainer">
          <Developers
            developers={developers}
            handleHire={handleHire}
          ></Developers>
        </div>
        <div className="col-10 col-md-6 mx-auto col-lg-3 mt-5 mt-lg-0 cartContainer">
          <Cart hiredDeveloper={hiredDeveloper}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Developerteam;
