import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AboutUs from '../pages/AboutUs';
import Documentação from '../pages/Document/index';
import Documentacion from '../pages/Document/esindex.js';
import Duvidas from '../pages/Duvidas/index'; 
import Preguntas from '../pages/Duvidas/esindex.js';
import Tradutors from '../pages/Tradutors';
import Home from '../pages/Home';
import Chat from '../pages/Chat';

export default function Routes() {
 return (
   <Switch>
      <Route exact path='/' component={Home}/> 
      <Route  path='/aboutus' component={AboutUs}/>
      <Route  path='/documents' component={Documentação}/>
      <Route  path='/documentacion' component={Documentacion}/>
      <Route  path='/duvidas' component={Duvidas}/>
      <Route  path='/preguntas' component={Preguntas}/>
      <Route  path='/login' component={Login}/>
      <Route  path='/register' component={Register}/>
      <Route  path='/tradutors' isPrivate component={Tradutors}/>
      <Route  path='/chat' isPrivate component={Chat}/>
   </Switch>
 );
}