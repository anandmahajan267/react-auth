import React, { useState, useEffect } from 'react';
import { Button, Avatar, CssBaseline, TextField, Grid, Typography, makeStyles, Container, Link, SnackbarContent } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
const LinkComponent = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
import { authUser, clearError } from '../../../store/actions/authActions'
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const Login = ({ handleUser, handleClearError, error, isLoading }) => {
    const classes = useStyles();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        error && handleClearError();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        error && handleClearError();
        const userDetails = { email, password }
        handleUser(userDetails)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={(e) => { handleSubmit(e) }} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        type="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error &&
                        <SnackbarContent className={classes.error} message={<span >{error}</span>} />
                    }

                    {isLoading &&
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="default"
                            className={classes.submit}
                        >
                            Please Wait...
          </Button>
                    }
                    {!isLoading && <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>}
                    <Grid container>
                        <Grid item xs>
                            <Link color="primary" component={LinkComponent} to='/'>
                                Back to Home
              </Link>
                        </Grid>
                        <Grid item>
                            <Link color="primary" component={LinkComponent} to='/signup'>
                                {"Don't have an account? Sign Up"} </Link>

                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}


const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        isLoading: state.auth.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleUser: (newUser) => dispatch(authUser(newUser)),
        handleClearError: () => dispatch(clearError())
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps
)(Login)