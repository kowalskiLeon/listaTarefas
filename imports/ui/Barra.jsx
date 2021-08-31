import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import { withRouter , Link} from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useStyles } from '../styles/navbar';

const Barra = (props) => {

    const classes = useStyles();

    const logout = () => {
        props.history.push('/');
        Meteor.logout();
    }

    return (
        <AppBar position="fixed" className={classes.bar}>
            <Toolbar>
                <Link className={classes.barbrand} to="/">Lista de Afazeres</Link>
                {props.user && (
                    <div>
                        <Link className={classes.barlink} to="/home">Controle de Tarefas</Link>
                        <Button onClick={logout}>Logout</Button>
                    </div>
                )}

            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Barra);