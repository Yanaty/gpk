import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }
    }

    handleChange = () => event => {
        this.setState({ ...this.state, checked: event.target.checked });
    }

    labelTemplate() {
        return(
            <span>I have read and agree to the&nbsp;
                <a
                    href="/terms_and_conditions"
                    target="_blank"
                >
                    Terms and Conditions
                </a>
                </span>
        )
    }

    render() {
        return (
            <div className="b-center">
                <div className="b-auth">
                    <div className="b-auth__inner">
                        <h2>Регистрация</h2>
                        <form className="b-form">
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Почта"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Имя"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Фамилия"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Отчество"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Номер телефона"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Пароль"
                                    type="password"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Повторите пароль"
                                    type="password"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Реферальный код"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row">
                                <input className="b-checkbox" type="checkbox" id="formTerms" name="formTerms"/>
                                <label className="b-label" for="formTerms">
                                    <span>Согласен с <Link to="/terms">политикой конфиденциальности</Link> и обработкой персональных данных</span>
                                </label>
                            </div>
                            <div className="b-form__row b-form__row_flex-jb">
                                <Button variant="contained" className="b-button b-mr20">Отправить</Button>
                                <Button variant="contained" className="b-button">Назад</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
