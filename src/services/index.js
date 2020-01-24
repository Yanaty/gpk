import axios from 'axios';

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
            throw new Error(`Error ${response.status}`)
        }

        let data = await response.json()
        return data.publications
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
            throw new Error(`Error ${response.status}`)
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

        const answer = await response.text()

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
            throw new Error(`Error ${response.status}`)
        }

        let data = await response.json()


        return data
    }
}

export default new APIServices()