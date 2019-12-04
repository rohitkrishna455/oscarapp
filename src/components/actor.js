import React from 'react';
import {Actorslist} from '../data/actors';
import { Link } from 'react-router-dom';
import ActorsContainer from './actorscontainer';

const Actor = (props) => {
   
    return(
    <div className = "main-content">

        <div><Link className = "back" to = "/actors">Back</Link></div>

        <div className = "container">
            <div className = "image-profile" style={{ backgroundImage: "url("+props.image+")"}} ></div>
              <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>

    </div>
    );
};

export default Actor;