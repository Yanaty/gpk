import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class View extends React.Component {

    render() {
        const {name, surname, middleName} = this.props
        return (
            <div className="b-personal__top">
                <div className="b-form personal">
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
                            label="Карта"
                            variant="outlined"
                        />
                    </div>
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
                    <div className="b-form__row b-form__row_flex-jb">
                        <Button variant="contained" className="b-button b-mr20">Сохранить</Button>
                        <Button variant="contained" className="b-button b-ml20" onClick={this.props.onCloseEditMode}>Отменить</Button>
                    </div>
                </div>
            </div>
        )
    }
}
