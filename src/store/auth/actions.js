import APIServices from "../../services";

export const signIn = (credentials) => {
    return async (dispatch, getState) => {
        try {
            const answer = await APIServices.signIn(credentials)
            console.log('answer', answer)
            dispatch({ type: 'LOGIN_SUCCESS' })
        } catch (err) {
            dispatch({ type: 'LOGIN_ERROR', error: 'Неправильный email или пароль' });
        }
    }
}

export const signOut = () => {
    return async (dispatch, getState) => {
        try {
            await APIServices.logOut();
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        } catch (err) {
            alert('Что-то пошло не так')
        }
    }
}

export const register = (fields) => {
    return async (dispatch, getState) => {
        try {
            const response = await APIServices.register(fields)
            dispatch({ type: 'LOGIN_SUCCESS' })
        } catch (err) {
            dispatch({ type: 'REGISTRATION_ERROR', error: err.message });
        }
    }
}