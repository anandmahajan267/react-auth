import history from '../../history/history'

import { START_LOADING, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_FAIL, CLEAR_ERROR } from './types'

export const registerUser = (newUser) => {
    return dispatch => {
        dispatch({ type: START_LOADING })
        fetch('http://localhost:3000/api/auth/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: REGISTER_SUCCESS, payload: {
                            signupSuccess: true,
                            isLoading: false
                        }
                    })
                }
                else {
                    dispatch({ type: REGISTER_FAIL, payload: res.message })
                }
            })
            .catch(err => {
                dispatch({ type: REGISTER_FAIL, payload: "Looks like server is down, Please try later" })
            })
    }
}

export const authUser = (userDetails) => {
    return dispatch => {
        dispatch({ type: START_LOADING })
        fetch('http://localhost:3000/api/auth/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        }).then(res => res.json())
            .then(res => {
                if (res.success) {
                    const payload = {
                        token: res.token,
                        user: res.data
                    }
                    dispatch({
                        type: LOGIN_SUCCESS, payload: payload
                    })
                    history.push('/')
                }
                else {
                    dispatch({ type: LOGIN_FAIL, payload: res.message })
                }
            })
            .catch(err => {
                dispatch({ type: LOGIN_FAIL, payload: "Looks like server is down, Please try later" })
            })
    }
}


export const resetSignupSuccess = () => {
    return dispatch => {
        dispatch({
            type: REGISTER_SUCCESS, payload: {
                signupSuccess: false,
                isLoading: false
            }
        })
    }
}
export const clearError = () => {
    return dispatch => {
        dispatch({ type: CLEAR_ERROR });
    }
}
export const logout = () => {
    return dispatch => {
        dispatch({ type: LOGOUT_SUCCESS });
    }
}
