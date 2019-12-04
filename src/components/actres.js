import React from 'react';
import {Actresslist} from '../data/actress';
import { Link } from 'react-router-dom';
import ActressContainer from './actresscontainer';

const Actres = (props) => {
   
    return(
    <div className = "main-content">

        <div><Link className = "back" to = "/actress">Back</Link></div>

        <div className = "container">
            <div className = "image-profile" style={{ backgroundImage: "url("+props.image+")"}} ></div>
              <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>

    </div>
    );
};

export default Actres;