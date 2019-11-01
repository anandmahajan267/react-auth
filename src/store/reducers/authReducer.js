import { FINISH_LOADING, START_LOADING, USER_LOGGED_IN, LOGIN_SUCCESS, REGISTER_SUCCESS, GET_ERROR, CLEAR_ERROR, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL } from "../actions/types";

const authInitState = {
    isLoggedIn: false,
    signupSuccess: false,
    token: localStorage.getItem('token'),
    user: {},
    queries: [],
    error: null,
    isLoading: false,
};

const authReducer = (state = authInitState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case FINISH_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case USER_LOGGED_IN:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                signupSuccess: false,
                user: action.payload.user
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                signupSuccess: action.payload.signupSuccess,
                isLoading: action.payload.isLoading,
            };
        case GET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
                error: action.payload
            };
        
        default:
            return state;
    }
};

export default authReducer;
