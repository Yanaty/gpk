const initialState = {
    isLogin: false,
    currentUser: '',
    isAdmin: false,
    authError: null,
    regError: null
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login errror ')
            return {
                ...state,
                authError: action.error
            }

        case 'LOGIN_SUCCESS':
            //console.log('login success');
            return {
                ...state,
                authError: null,
                isLogin: true
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return {
                ...state,
                isLogin: false
            }

        case 'REGISTRATION_ERROR':
            return {
                ...state,
                regError: action.error
            };

        default:
            return state
    }
}

// selectors

export function isLogin(state) {
    return state.auth.isLogin
}

export function getAuthError(state) {
    return state.auth.authError
}

export function getRegError(state) {
    return state.auth.regError
}