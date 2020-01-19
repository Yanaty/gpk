import axios from 'axios';

const API_ENDPOINT = 'http://gpk24.garant.ru:7070/';



class APIServices {
    async getPublicationsPage(page) {
        //const url = `${API_ENDPOINT}rest/publication/page/${page}`;
        const url = `http://95.165.130.218:7070/rest/publication/page/${page}`

       /* const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Cookie': document.cookie
            }
        });*/

        await axios.get(url)
            .then(res => {
                console.log('res', res.data.publications)
                return res.data.publications
            })

       /* if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }

        let data = await response.json()
        console.log('data', data)
        return data.publications*/
    }

    async signIn(credentials) {
        //const url = `${API_ENDPOINT}auth/login`
        const url = `http://95.165.130.218:7070/auth/login`

        const data = {
            email: credentials.email,
            password: credentials.password
        }

        console.log('data', data)
       /* const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Cookie': document.cookie
            }
        })*/

        await axios.post(url,  data )
            .then(res => {
                console.log(res);
            })

        /*if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }
        return await response.json()*/
    }

    async logOut() {
        //const url = '/auth/logout'
        const url = `http://95.165.130.218:7070/auth/logout`

        const response = await fetch(url, {
            method: 'POST'
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }
        return response.ok
    }

    async register(fields) {
        //const url = `${API_ENDPOINT}auth/register`
        const url = `http://95.165.130.218:7070/auth/register`

        const data = {
            email: fields.email,
            name: fields.name,
            surname: fields.surname,
            middleName: fields.middlename,
            phoneNumber: fields.phone,
            password: fields.password,
            passwordConfirm: fields.confirmPassword
        }

        console.log('json string', JSON.stringify(data))

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        //console.log('response', response)
        const answer = await response.text()
       // console.log('anwer', answer)
        if (!response.ok) {
            throw new Error(answer)
        }

        return answer

    }
}

export default new APIServices()