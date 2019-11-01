import React from 'react';
import {makeStyles, AppBar, Toolbar, Typography, Link} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
const LinkComponent = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
import { logout } from "../../store/actions/authActions";
import { connect } from "react-redux";

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

const Dashboard = ({ handleLogout, isLoggedIn }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        <Link color="inherit" component={LinkComponent} className={classes.link} to='/'> React Auth App</Link>
                    </Typography>
                    {!isLoggedIn &&
                        <Link color="inherit" component={LinkComponent} className={classes.link} to='/login'>Login </Link>
                    }
                    {isLoggedIn &&
                        <>
                            <Link color="inherit" component={LinkComponent} className={classes.link} to='/' onClick={(e) => { handleLogout() }}> Logout</Link>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps
)(Dashboard)