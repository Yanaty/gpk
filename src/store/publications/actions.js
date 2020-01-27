import APIServices from '../../services'

export function fetchPublications() {
    return async(dispatch, getState) => {
        try {
            let publications = await APIServices.getPublicationsPage(0);
            dispatch({ type: 'PUBLICATIONS_FETCHED', publications });

        } catch (error) {
            console.error(error);
        }
    };
}

