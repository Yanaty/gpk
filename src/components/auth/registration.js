import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link, Redirect } from 'react-router-dom'
import * as authAction from "../../store/auth/actions"
import autoBind from 'react-autobind'
import InputMask from 'react-input-mask'
import * as authSelectors from "../../store/auth/reducer"
import {connect} from "react-redux"

class Registration extends React.Component {
    constructor(props) {
        super(props)
        autoBind(this)

        this.state = {
            checked: false,
            user: false,
            email : '',
            name: '',
            surname: '',
            middlename: '',
            phone: '',
            password: '',
            confirmPassword: '',
            refCode: '',
            formErrors: {
                email : '',
                name: '',
                surname: '',
                middlename: '',
                phone: '',
                password: '',
                confirmPassword: '',
            },
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            agreeTerm: false,
            formValid: false,
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        let fieldValidationErrors = this.state.formErrors
        fieldValidationErrors.user = ''
        this.setState({
            [name] : value,
            formErrors : fieldValidationErrors
        })

        if (this.state.formErrors[name] !== '') {
            this.validateField(name, value)
        }

        this.validateForm()
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid
        let confirmPasswordValid = this.state.confirmPasswordValid
        switch(fieldName) {
            case 'email':
                const match = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

                emailValid = (match && match.length > 0)

                fieldValidationErrors.email = emailValid ? '' : 'Email неправильный'
                break
            case 'password':
                passwordValid = value.length >= 8 && value.length <= 60
                fieldValidationErrors.password = passwordValid ? '': 'Пароль должен содержить от 8 до 60 символов'
                break
            case 'confirmPassword':
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '': 'Пароли не совпадают'
                break
            default:
                break
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid
        }, this.validateForm)
    }

    validateForm() {
        this.setState({formValid:   (this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid) ||
                (this.state.email && this.state.password && this.state.confirmPassword)})

       }

    handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        this.props.dispatch(authAction.register(this.state));
        //this.props.signIn(this.state)
    }

    checkboxClick = () => {
        const bool = this.state.agreeTerm
        this.setState({agreeTerm : !bool})
    }

    render() {
        const { regError, isLogin } = this.props
        const rows = []
        if (regError) {
            const regErrorArray = JSON.parse(regError)
            console.log('regErrorArray', regErrorArray)
            regErrorArray.forEach((item, index) => {
                rows.push(<p key={index}>{item.msg}</p>);
            });
        }

        if (isLogin) return <Redirect to='/' />
        return (
            <div className="b-center">
                <div className="b-auth">
                    <div className="b-auth__inner">
                        <h2>Регистрация</h2>
                        <form className="b-form blue" onSubmit={this.handleSubmit}>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="email-input"
                                    label="Почта"
                                    variant="outlined"
                                    name="email"
                                    required
                                    value={this.state.email}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('email', this.state.email)}
                                />
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.email ? this.state.formErrors.email : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="name-input"
                                    label="Имя"
                                    variant="outlined"
                                    name="name"
                                    required
                                    value={this.state.name}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('name', this.state.name)}
                                />
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.name ? this.state.formErrors.name : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="surname-input"
                                    label="Фамилия"
                                    variant="outlined"
                                    name="surname"
                                    required
                                    value={this.state.surname}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('surname', this.state.surname)}
                                />
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.surname ? this.state.formErrors.surname : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="middlename-input"
                                    label="Отчество"
                                    variant="outlined"
                                    name="middlename"
                                    required
                                    value={this.state.middlename}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('middlename', this.state.middlename)}
                                />
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.middlename ? this.state.formErrors.middlename : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <InputMask
                                    mask="+7-999-999-99-99"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('phone', this.state.phone)}
                                    className="b-form__field"
                                    id="phone-input"
                                    label="Номер телефона"
                                    variant="outlined"
                                    required
                                >
                                    {(inputProps) =>
                                        <TextField fullWidth
                                                   {...inputProps}
                                        />
                                    }
                                </InputMask>
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.phone ? this.state.formErrors.phone : null}
                                    </span>
                                </div>

                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="password-input"
                                    label="Пароль"
                                    type="password"
                                    variant="outlined"
                                    name="password"
                                    required
                                    value={this.state.password}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('password', this.state.password)}
                                />
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.password ? this.state.formErrors.password : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="confirmPassword-input"
                                    label="Повторите пароль"
                                    type="password"
                                    variant="outlined"
                                    name="confirmPassword"
                                    required
                                    value={this.state.confirmPassword}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('confirmPassword', this.state.confirmPassword)}
                                />
                                <div>
                                    <span className="b-error">
                                        {this.state.formErrors.confirmPassword ? this.state.formErrors.confirmPassword : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-form__field"
                                    id="refCode-input"
                                    label="Реферальный код"
                                    variant="outlined"
                                    name="refCode"
                                    value={this.state.refCode}
                                    onChange={this.handleUserInput}
                                    onBlur={() => this.validateField('refCode', this.state.refCode)}
                                />
                            </div>
                            <div className="b-form__row">
                                <input className="b-checkbox" type="checkbox" id="formTerms" name="formTerms" onChange={this.checkboxClick}/>
                                <label className="b-label" htmlFor="formTerms" >
                                    <span>Согласен с <Link to="/terms">политикой конфиденциальности</Link> и обработкой персональных данных</span>
                                </label>
                            </div>
                            <div className="b-form__row b-form__row_flex-jb">
                                <Button variant="contained" className="b-button b-mr20" type="submit" disabled={!this.state.agreeTerm}>Отправить</Button>
                                {/*<Button variant="contained" className="b-button">Назад</Button>*/}
                            </div>
                            <div>
                                <span className="b-error">
                                    { regError ? <div>{rows}</div> : null }
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        regError: authSelectors.getRegError(state),
        isLogin: authSelectors.isLogin(state)
    }
}


export default connect(mapStateToProps)(Registration)
