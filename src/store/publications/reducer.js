const initialState = []

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case 'PUBLICATIONS_FETCHED':
            return action.publications
        default:
            return state
    }
}

// selectors

export function getPublications(state) {
    return state.publications.publications
}

export function getDistributors(state) {
    return state.publications.distributors
}