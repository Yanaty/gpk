import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link, Redirect } from 'react-router-dom'
import autoBind from 'react-autobind'
import * as authAction from '../../store/auth/actions'
import * as authSelectors from '../../store/auth/reducer'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)

        autoBind(this)

        this.state = {
            user: false,
            email : '',
            password: '',
            formErrors: {email : '', password: '', user : ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let fieldValidationErrors = this.state.formErrors;
        fieldValidationErrors.user = '';
        this.setState({
            [name] : value,
            formErrors : fieldValidationErrors
        });

        if (this.state.formErrors[name] !== '') {
            this.validateField(name, value);
        }

        this.validateForm();
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 3;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid:   (this.state.emailValid && this.state.passwordValid) ||
                (this.state.email && this.state.password)});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(authAction.signIn(this.state));
        //this.props.signIn(this.state)
    }

    render() {
        const { authError, isLogin } = this.props;
        if (isLogin) return <Redirect to='/' />
        return (
            <div className="b-center">
                <div className="b-auth">
                    <div className="b-auth__inner">
                        <h2>Вход</h2>
                        <form className="b-form blue" onSubmit={this.handleSubmit}>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
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
                                        {this.state.formErrors.email ? 'Email' + this.state.formErrors.email : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row">
                                <TextField fullWidth
                                    className="b-rorm__field"
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
                                        {this.state.formErrors.password ? 'Password' + this.state.formErrors.password : null}
                                    </span>
                                </div>
                            </div>
                            <div className="b-form__row b-form__row_flex-jb">
                                <Button variant="contained" className="b-button b-mr20" type="submit">Отправить</Button>
                                {/*<Button variant="contained" className="b-button">Назад</Button>*/}
                            </div>
                            <div>
                                <span className="b-error">
                                    { authError ? <p>{authError}</p> : null }
                                </span>
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

const mapStateToProps = (state) => {
    return{
        authError: authSelectors.getAuthError(state),
        isLogin: authSelectors.isLogin(state)
    }
}


export default connect(mapStateToProps)(Login)
