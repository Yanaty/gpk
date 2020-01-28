import APIServices from '../../services'

export function fetchPublications(page) {
    return async(dispatch, getState) => {
        try {
            let publications = await APIServices.getPublicationsPage(page);
            dispatch({ type: 'PUBLICATIONS_FETCHED', publications });

        } catch (error) {
            console.error(error);
        }
    };
}

