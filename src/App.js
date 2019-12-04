import React from 'react';
import {BrowserRouter ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
//  import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';
import ActorsContainer from './components/actorscontainer';
import ActressContainer from './components/actresscontainer';
import FilmsContainer from './components/filmscontainer';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar title="OSCARS 2019" />
    {/* do you want to pass props in Route you can write render and arrow fun instead of component={Home}*/}
     {/* <Route to="/" component={Home} /> */}
     <Route exact path="/" render = {() => <Home title="OSCAR WINNERS " /> }  />
     <Route path ="/actors" render = {() => <ActorsContainer title="BEST ACTORS" /> } />
     <Route path ="/actress" render = {() => <ActressContainer title="BEST ACTRESS" /> } />
     <Route path ="/films" render = {() => <FilmsContainer title="BEST FILMS" /> } />
     </div>
    </BrowserRouter>
  );
}

export default App;
