import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import autobind from 'react-autobind'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }

        autobind(this)
    }

    render() {
        return (
            <div className="b-personal-info">
                <h3>Персональные данные</h3>
                <div className="b-personal__main">
                    <Avatar alt="Avatar" src="/assets/images/avatar.png" className="b-avatar" />
                    <div className="b-personal__top">
                        <div>
                            <div className="b-personal__fio">admin admin admin</div>
                            <div className="b-personal__email">admin@admin.ru</div>
                        </div>
                        <div className="b-personal__referrals">
                            <span><b>Реферальный код:</b> <code>c19d21</code></span>
                            <Button variant="contained" className="b-button b-ml20">Скопировать</Button>
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
                            <Button variant="contained" className="b-button b-mr20">Сохранить</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}