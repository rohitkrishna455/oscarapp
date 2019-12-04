import React from 'react';
import {Actorslist} from '../data/actors';
import { Link } from 'react-router-dom';

const Actors = (props) => {
   
   let actors = Actorslist.map((person) =>{
    return(
        <div className = "actor-container">
            <Link to ={`/actors/${person.url}`}>
                <div className = "actor-image" style = {{backgroundImage : "url("+ person.img_url +")"}} ></div>
            </Link>
            <h3>{person.name}</h3>
            <p>{person.movie}</p>
            <p>{person.year}</p>
        </div>
    );
   });

    return(
    <div className = "main-content">
        <div><Link className = "back" to = "/">Back</Link></div>
              <h2>{props.title}</h2>
        <div className = "container">
        {actors}
        </div>
    </div>
    );
};

export default Actors;