const initialState = []

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'PUBLICATIONS_FETCHED':
            return action.publications
        default:
            return state;
    }
}