import APIServices from "../../services"

export const getCurrentUser = () => {
    return async (dispatch, getState) => {
        try {
            const user = await APIServices.getCurrentDistributor()
            dispatch({ type: 'SET_CURRENT_USER', user })

            console.log('store after dispatch', getState())
        } catch (err) {
            alert('Ошибка получения данных полбьзователя!')
        }
    }
}