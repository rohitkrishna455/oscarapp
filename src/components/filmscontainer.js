import React from 'react';
import {Filmslist} from '../data/films';
import Film from './film';
import { Route } from 'react-router-dom';
import Films from './films';


const FilmsContainer = (props) => {

    let actorurl = Filmslist.map((actor) => {
        return(
            <Route path={`/films/${actor.url}`} render = {() => <Film image={actor.actor_url}
                                                                       movie={actor.movie} 
                                                                       year={actor.year}
                                                                       release={actor.release}
                                                                       director={actor.director}
                                                                       awards={actor.awards}
                                                                       description ={actor.description} />} />
        );   
    });
    return(
       <div>
           {/* pass the above route below */}
           <Route exact path ="/films" render={() => <Films  title="BEST FILMS"/>} />
           {actorurl}
       </div>
   
    );
};

export default FilmsContainer;