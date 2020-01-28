const API_ENDPOINT = 'http://gpk24.garant.ru:7070/';

class APIServices {
    async getPublicationsPage(page) {
        const url = `rest/publication/page/${page}`;
        //const url = `http://95.165.130.218:7070/rest/publication/page/${page}`

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Cookie': document.cookie
            }
        })

        if (!response.ok) {
            throw new Error(`Ошибка получения публикаций ${response.status}`)
        }

        let data = await response.json()

        return data
    }

    async signIn(credentials) {
        const url = `auth/login`
        //const url = `http://95.165.130.218:7070/auth/login`

        const data = {
            email: credentials.email,
            password: credentials.password
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': document.cookie
            }
        })

        if (!response.ok) {
            throw new Error(`Ошибка входа ${response.status}`)
        }


        return await response.json()
    }

    async register(fields) {
        const url = `auth/register`
        //const url = `http://95.165.130.218:7070/auth/register`

        const data = {
            email: fields.email,
            name: fields.name,
            surname: fields.surname,
            middleName: fields.middlename,
            phoneNumber: fields.phone,
            password: fields.password,
            passwordConfirm: fields.confirmPassword
        }

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const answer = await response.json()

        if (!response.ok) {
            throw new Error(answer)
        }

        return answer
    }

    async getCurrentDistributor() {
        const url = 'rest/v1/distributor'

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Cookie': document.cookie
            }
        })

        if (!response.ok) {
            throw new Error(`Ошибка получения текущего пользователя ${response.status}`)
        }

        let data = await response.json()


        return data
    }

    async updateDocument(data) {
        const url ='rest/v1/distributor/document'

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': document.cookie
            }
        })

        if (!response.ok) {
            throw new Error(`Ошибка сохранения документа ${response.status}`)
        }

        return response
    }

    async getDistributorsListByPage(page) {
        const url = `rest/v1/admin/distributors/page/${page}`

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Cookie': document.cookie
            }
        })
        console.log('respnos', response)

        if (!response.ok) {
            console.log('Ошибка получения списка пользователей')
        }

        const data = await response.json()

        return data
    }

    async getCurrentDistributorReferralsByPage(page) {
        const url = `rest/v1/distributor/search/referrals/page/${page}`

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Cookie': document.cookie
            }
        })

        if (!response.ok) {
            console.log('Ошибка получения реферралов пользователя')
        }

        const data = await response.json()

        return data
    }

    async getPublicationsPageByDistributorId(id, page) {
        const url = `rest/v1/publication/distributor/${id}/page/${page}`

        const response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Cookie': document.cookie
            }
        })

        if (!response.ok) {
            console.log('Ошибка получения публикаций пользователя')
        }

        const data = await response.json()

        return data
    }

    async savePublication(data) {
        const url ='rest/v1/publication'

        const formData  = new FormData();

        for(const name in data) {
            formData.append(name, data[name]);
        }

        const response = await fetch(url, {
            method: 'PUT',
            body: formData,
            credentials: 'same-origin',
            headers: {
                'Cookie': document.cookie
            }
        })

        const answer = await response.text()

        if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }

        return response
    }


}

export default new APIServices()