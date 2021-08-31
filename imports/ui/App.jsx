import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { useStyles } from '../styles/navbar';
import { Cadastro } from './Cadastro';
import { Home } from './Home';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { ListaTarefas } from './ListaTarefas';
import Barra from './Barra';




export function App() {
  const classes = useStyles();


  const user = useTracker(() => Meteor.user());

  const [anchorEl, setAnchorEl] = useState(false);
  const hideCompletedFilter = { isChecked: { $ne: true } };
  const userFilter = user ? { userId: user._id } : {};
  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
  

  return (
    <div>
      <BrowserRouter>
        
      <Barra user={user}/>
        <div className={classes.sitecontent}>
          <Switch>
            
            <Route path="/" exact={true} >
              {user?(<Redirect to={{pathname: "/home"}}/>) : <Home /> }
            </Route>
            <Route path="/cadastro" exact={true} >
               <Cadastro/>
            </Route>
            <Route path="/home" exact={true} >
              {!user?(<Redirect to={{pathname: "/"}}/>) : <ListaTarefas  /> }
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

    </div>);
};
