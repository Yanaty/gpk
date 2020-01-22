import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import autobind from 'react-autobind'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0,
            name: 'start'
        }

        autobind(this)
    }

    componentDidMount() {
        this.save()
    }

    async logout(e) {
        e.preventDefault();

        console.log('start logout')

        const url = `auth/logout`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Cookie': document.cookie
            }
        })

    }

    async save() {

        const url = `rest/v1/distributor`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Cookie': document.cookie
            }
        })

        console.log('response', response)

        const js = await response.json()

        console.log('ans', js)

        this.setState({name: js.name})
    }

    render() {
        return (
            <div className="b-personal-info">
                <h3>Персональные данные</h3>
                <div className="b-personal__main">
                    <Avatar alt="Avatar" src="/assets/images/avatar.png" className="b-avatar big" />
                    <div className="b-personal__top">
                        <div>
                            <div className="b-personal__fio">{this.state.name}</div>
                            <div className="b-personal__email">admin@admin.ru</div>
                        </div>
                        <div className="b-personal__referrals">
                            <span><b>Реферальный код:</b> <code>c19d21</code></span>
                            <Button variant="contained" className="b-button b-ml20" onClick={this.logout}>Скопировать</Button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="b-personal__passport">
                    <h3>Паспортные данные</h3>
                    <div className="b-form personal">
                        <div className="b-form__row">
                            <TextField fullWidth
                                className="b-rorm__field"
                                id="email-input"
                                label="Номер паспорта"
                                variant="outlined"
                            />
                        </div>
                        <div className="b-form__row">
                            <TextField fullWidth
                                className="b-rorm__field"
                                id="email-input"
                                label="Дата получения"
                                variant="outlined"
                            />
                        </div>
                        <div className="b-form__row">
                            <TextField fullWidth
                                className="b-rorm__field"
                                id="email-input"
                                label="Код подразделения"
                                variant="outlined"
                            />
                        </div>
                        <div className="b-form__row">
                            <TextField fullWidth
                                className="b-rorm__field"
                                id="email-input"
                                label="Подразделение выдавшее паспорт"
                                variant="outlined"
                            />
                        </div>
                        <div className="b-form__row">
                            <Button variant="contained" className="b-button b-mr20" onClick={this.save}>Сохранить</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}