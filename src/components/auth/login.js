import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    render() {
        return (
            <div className="b-center">
                <div className="b-auth">
                    <div className="b-auth__inner">
                        <h2>Вход</h2>
                        <form className="b-form blue">
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
                                    label="Пароль"
                                    type="password"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row b-form__row_flex-jb">
                                <Button variant="contained" className="b-button b-mr20">Отправить</Button>
                                <Button variant="contained" className="b-button">Назад</Button>
                            </div>
                            <div className="b-form__row b-form__row_flex-jb">
                                <Link to="/registration">Регистрация</Link>
                                <Link to="/reset">Восстановление пароля</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
