const isLoginBool = document.cookie.length > 0
const initialState = {
    isLogin: isLoginBool,
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
            }

        case "SET_ADMIN":
            return {

            }

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

export function isAdmin(state) {
    if (state.user.roles) {
        return state.user.roles.includes('ADMIN')
    }
}
