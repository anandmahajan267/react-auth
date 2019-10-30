import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
const LinkComponent = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1),
    },
}));
export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                   
                    <Typography variant="h6" className={classes.title}>
                    <Link color="inherit" component={LinkComponent} className={classes.link} to='/'> React Auth App</Link>
          </Typography>

                    <Link color="inherit" component={LinkComponent} className={classes.link} to='/login'>Login </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}