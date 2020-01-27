const initialState = {}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...action.user
            }
        default:
            return state
    }
}

// selectors
export function getCurrentUser(state) {
    return state.user
}

export function getCurrentUserId(state) {
    if (state.user) {
        return state.user.id
    }
}
