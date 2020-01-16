import APIServices from '../../services'

export function fetchPublications() {
    return async(dispatch, getState) => {
        try {
            let publications = await APIServices.getPublicationsPage(0);

            console.log('publications', publications)
            //dispatch({ type: 'ASSETS_FETCHED', Assets });
            //dispatch({ type: 'SET_PAGINATION_TOKEN', PaginationToken })

        } catch (error) {
            console.error(error);
        }
    };
}