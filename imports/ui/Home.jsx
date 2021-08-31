import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Box, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../styles/navbar';
import { useHistory } from 'react-router-dom';



export const Home = (props) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const user = useTracker(() => Meteor.user());
    let history = useHistory();
    
    const submit = e => {
        e.preventDefault();
        Meteor.loginWithPassword(username, password);
    };

    const cadastrar =  e => {
        e.preventDefault();
        history.push('/cadastro')
    }


    return (
        <form onSubmit={submit} className="login-form" noValidate autoComplete="off">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Card className={classes.cartao}>
                    <CardContent>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TextField id="standard-basic"
                                label="Usuario"
                                type="text"
                                name="username"
                                required
                                onChange={e => setUsername(e.target.value)}
                                style={{ width: '360px' }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <TextField id="standard-basic"
                                label="Senha"
                                type="password"
                                name="password"
                                required
                                onChange={e => setPassword(e.target.value)}
                                style={{ width: '360px' }}
                            />

                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Button type="submit">Entrar</Button>
                            <Button onClick={cadastrar}>Cadastrar</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </form>
    )
}