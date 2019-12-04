import React from 'react';
import {Actresslist} from '../data/actress';
import Actres from './actres';
import { Route } from 'react-router-dom';
import Actress from './actress';


const ActressContainer = (props) => {

    let actorurl = Actresslist.map((actor) => {
        return(
            <Route path={`/actress/${actor.url}`} render = {() => <Actres image={actor.actor_url} name={actor.name} description ={actor.description} />} />
        );   
    });
    return(
       <div>
           {/* pass the above route below */}
           <Route exact path ="/actress" render={() => <Actress  title="BEST ACTRESS"/>} />
           {actorurl}
       </div>
   
    );
};

export default ActressContainer;