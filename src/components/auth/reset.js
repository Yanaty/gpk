import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class Reset extends React.Component {
    render() {
        return (
            <div className="b-center">
                <div className="b-auth">
                    <div className="b-auth__inner">
                        <h2>Восстановление пароля</h2>
                        <form className="b-form">
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
                                    id="email-input"
                                    label="Почта"
                                    variant="outlined"
                                />
                            </div>
                            <div className="b-form__row b-form__row_flex-jb">
                                <Button variant="contained" className="b-button b-mr20">Отправить</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
