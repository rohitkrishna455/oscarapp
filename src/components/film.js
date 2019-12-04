import React from 'react';
import {Filmlist} from '../data/films';
import { Link } from 'react-router-dom';
import FilmsContainer from './filmscontainer';

const Film = (props) => {
   
    return(
    <div className = "main-content">

        <div><Link className = "back" to = "/films">Back</Link></div>

        <div className = "container">
            <div className = "image-profile" style={{ backgroundImage: "url("+props.image+")"}} ></div>
         <li className="movies-list-item">   
             
              <p><b>MOVIE :</b>{props.movie}</p>  
               <p><b>AWARDED YEAR :</b>{props.year}</p> 
               <p><b>RELEASE DATE :</b>{props.release}</p> 
               <p><b>DIRECTOR :</b>{props.director}</p> 
               <p><b>AWARDS :</b>{props.awards}</p>
            <p><b>STORY :</b>{props.description}</p>

</li>
        </div>

    </div>
    );
};

export default Film;