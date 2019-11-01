import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, SnackbarContent, Grid, colors, Typography, makeStyles, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
const LinkComponent = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
import { registerUser, clearError, resetSignupSuccess } from '../../../store/actions/authActions'
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    login: {
        color: colors.orange[500],
    },
    success: {
        backgroundColor: colors.green[700],
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Signup = ({ handleRegisterUser, handleClearError, handleResetSignupSuccess, error, isLoading, signupSuccess }) => {
    const classes = useStyles();
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        console.log('colors : ', colors)
        error && handleClearError();
        handleResetSignupSuccess();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault()
        error && handleClearError();
        const userDetails = { first_name, last_name, email, password }
        console.log('userDetails : ', userDetails)
        handleRegisterUser(userDetails)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                {signupSuccess &&
                    <>
                        <Typography component="h1" variant="h5">Registration Success</Typography>
                        <Grid container>
                            <Grid item xs>
                                <SnackbarContent className={classes.success} message={
                                    <span >
                                        Dear {first_name} {last_name}, your registration is completed,
                                        Please continue to&nbsp;
                                <Link className={classes.login} component={LinkComponent} to='/login'>Sign in</Link>
                                    </span>
                                } />
                            </Grid>
                        </Grid>
                    </>
                }
                {!signupSuccess &&
                    <>
                        <Typography component="h1" variant="h5">Sign up</Typography>
                        <form className={classes.form} onSubmit={(e) => { handleSubmit(e) }}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                name="first_name"
                                type="text"
                                autoFocus
                                value={first_name}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="last_name"
                                label="Last Name"
                                name="last_name"
                                type="text"
                                autoFocus
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
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
                                Sign UP!
          </Button>}
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link color="inherit" component={LinkComponent} to='/login'>
                                        Already have an account? Sign in
              </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </>
                }
            </div>

        </Container>
    );
}


const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        isLoading: state.auth.isLoading,
        signupSuccess: state.auth.signupSuccess,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleRegisterUser: (newUser) => dispatch(registerUser(newUser)),
        handleClearError: () => dispatch(clearError()),
        handleResetSignupSuccess: () => dispatch(resetSignupSuccess()),
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps
)(Signup)