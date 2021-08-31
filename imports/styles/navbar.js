import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },

    cartao: {
        flexGrow: 1,
        paddingLeft: '8%',
        paddingRight: '8%',
        marginTop:'2%'
    },
    menuButton: {
        marginRight: 2
    },
    title: {
        flexGrow: 1,
    },
    bar: {
        background: 'linear-gradient(90deg, #a0bf97  10%, #bcceac 90%) !important',
        boxShadow: '0 3px 5px 2px #2f2f2f',
        color: 'white',
        padding: '20px',
        width: '100vw'
    },
    barbrand: {
        textDecoration: 'none',
        fontSize: '2em',
        color: 'white',
        textAlign: 'center'

    },
    barlink: {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'white'

    },
    sitecontent: {
        backgroundColor: '#333333',
        height: '86vh',
        padding: '20px',
        marginTop: '10vh'
    },
});
