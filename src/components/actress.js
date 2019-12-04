import React from 'react';
import {Actresslist} from '../data/actress';
import { Link } from 'react-router-dom';


const Actress = (props) => {
   
   let actors = Actresslist.map((person) =>{
    return(
        <div className = "actor-container">
            <Link to= {`/actress/${person.url}`}>
                <div className = "actor-image" style = {{backgroundImage : "url("+ person.img_url +")"}}></div>
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

export default Actress;