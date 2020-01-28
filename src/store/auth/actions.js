import APIServices from "../../services"
import * as publicationsActions from '../publications/actions'
import history from '../../history' 

export const signIn = (credentials) => {
    return async (dispatch, getState) => {
        try {
            const user = await APIServices.signIn(credentials)
            dispatch({ type: 'LOGIN_SUCCESS' })
            dispatch({ type: 'SET_CURRENT_USER' , user})
        } catch (err) {
            dispatch({ type: 'LOGIN_ERROR', error: 'Неправильный email или пароль' });
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState) => {
        document.cookie ='token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        dispatch({ type: 'SIGNOUT_SUCCESS'})
        dispatch({ type: 'SET_CURRENT_USER' , user: null})
        if (history.location.pathname === '/') {
            dispatch(publicationsActions.fetchPublications());
        }
        history.push('/')
    }
}

export const register = (fields) => {
    return async (dispatch, getState) => {
        try {
            const user = await APIServices.register(fields)
            dispatch({ type: 'LOGIN_SUCCESS' })
            dispatch({ type: 'SET_CURRENT_USER' , user})
        } catch (err) {
            dispatch({ type: 'REGISTRATION_ERROR', error: err.message });
        }
    }
}