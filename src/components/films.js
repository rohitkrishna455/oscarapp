import React from 'react';
import {Filmslist} from '../data/films';
import { Link } from 'react-router-dom';


const Films = (props) => {
   
   let actors = Filmslist.map((person) =>{
    return(
        <div className = "actor-container">
            <Link to={`/films/${person.url}`}>
                <div className = "actor-image" style = {{backgroundImage : "url("+ person.img_url +")"}}></div>
            </Link>
            {/* <h3>{person.name}</h3> */}
            <h3>{person.movie}</h3>
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

export default Films;