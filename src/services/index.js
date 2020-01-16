const API_ENDPOINT = 'http://gpk24.garant.ru:7070/rest/';

class APIServices {
    async getPublicationsPage(page) {
        const url = `${API_ENDPOINT}/publication/page/${page}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
        }
        console.log('res', response);
        return response;
    }
}

export default new APIServices();