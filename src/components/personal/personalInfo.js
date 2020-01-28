import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import autoBind from 'react-autobind'
import InputMask from 'react-input-mask'
import APIServices from '../../services'
import moment from 'moment'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0,
            issueDate: '2020-01-01',
            series: '',
            unitCode: '',
            unitIssued: '',
            textAfterSave: 'Сохранено',
            isShowText: false,
            isSuccess: false
        }

        autoBind(this)
    }

    componentDidMount() {
        this.setState((state, props) => ({
           // TODO Сделать передачу данных о паспорте в стейт, когда будет готов бек
        }));
    }

    handleUserInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            issueDate: moment(this.state.issueDate).format('DD.MM.YYYY'),
            series: this.state.series,
            unitCode: this.state.unitCode,
            unitIssued: this.state.unitIssued,
        }

        APIServices.updateDocument(data)
            .then(answer => {
                this.setState({isShowText: true, textAfterSave: 'Сохранено!', isSuccess: true})
            }).catch(err => {
                console.log('Ошибка', err)
                this.setState({isShowText: true, textAfterSave: 'Ошибка!', isSuccess: false})
            }).finally(() => {
                setTimeout(() => this.setState({isShowText: false}), 2000)
            })
    }

    render() {
        const {name, middleName, surname, email, referralCode} = this.props.user
        return (
            <div className="b-personal-info">
                <h3>Персональные данные</h3>
                <div className="b-personal__main">
                    <Avatar alt="Avatar" src="/assets/images/avatar.png" className="b-avatar big" />
                    <div className="b-personal__top">
                        <div>
                            <div className="b-personal__fio">{surname} {name} {middleName}</div>
                            <div className="b-personal__email">{email}</div>
                        </div>
                        <div className="b-personal__referrals">
                            <span className="b-personal__referrals_head"><b>Реферальный код:</b> </span>
                            <code>{referralCode}1111111</code>
                            <Button variant="contained" className="b-button b-ml20">Скопировать</Button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="b-personal__passport">
                    <h3>Паспортные данные</h3>
                    <form className="b-form" onSubmit={this.handleSubmit}>
                        <div className="b-form personal">
                            <div className="b-form__row">
                                <InputMask
                                    mask="9999 999999"
                                    name="series"
                                    value={this.state.series}
                                    onChange={this.handleUserInput}
                                    className="b-form__field"
                                    id="passport-input"
                                    label="Серия и номер паспорта"
                                    variant="outlined"
                                    required
                                >
                                    {(inputProps) =>
                                        <TextField fullWidth
                                                   id="series-input"
                                                   {...inputProps}
                                        />
                                    }
                                </InputMask>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="issueDate-input"
                                    label="Дата получения"
                                    variant="outlined"
                                    type="date"
                                    name="issueDate"
                                    format="dd/mm/yyyy"
                                    value={this.state.issueDate}
                                    required
                                    onChange={this.handleUserInput}
                                />
                            </div>
                            <div className="b-form__row">
                                <InputMask
                                    mask="999-999"
                                    name="unitCode"
                                    value={this.state.unitCode}
                                    onChange={this.handleUserInput}
                                    className="b-form__field"
                                    id="phone-input"
                                    label="Код подразделения"
                                    variant="outlined"
                                    required
                                >
                                    {(inputProps) =>
                                        <TextField fullWidth
                                                   id="unitCode-input"
                                                   {...inputProps}
                                        />
                                    }
                                </InputMask>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="unitIssued-input"
                                    label="Подразделение выдавшее паспорт"
                                    variant="outlined"
                                    name="unitIssued"
                                    required
                                    value={this.state.unitIssued}
                                    onChange={this.handleUserInput}
                                />
                            </div>
                            <div className="b-form__row">
                                <Button variant="contained" className="b-button b-mr20" type="submit">Сохранить</Button>
                                {this.state.isShowText &&
                                    <span className={this.state.isSuccess ? 'success' : 'error'}>{this.state.textAfterSave}</span>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}