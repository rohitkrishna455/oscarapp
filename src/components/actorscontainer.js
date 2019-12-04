import React from 'react';
import {Actorslist} from '../data/actors';
import Actor from './actor';
import { Route } from 'react-router-dom';
import Actors from './actors';


const ActorsContainer = (props) => {

    let actorurl = Actorslist.map((actor) => {
        return(
            <Route path={`/actors/${actor.url}`} render = {() => <Actor image={actor.actor_url} name={actor.name} description ={actor.description} />} />
        );   
    });
    return(
       <div>
           {/* pass the above route below */}
           <Route exact path ="/actors" render={() => <Actors  title="BEST ACTORS"/>} />
           {actorurl}
       </div>
   
    );
};

export default ActorsContainer;