import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import ContextMenu from './contextMenu'
import {connect} from "react-redux"
import * as authSelectors from '../../store/auth/reducer'
import * as authActions from '../../store/auth/actions'
import _ from 'lodash'
import * as userActions from '../../store/user/actions'
import * as userSelectors from '../../store/user/reducer'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isClickSignOut: false
        }
    }

    componentDidMount() {
        if (_.isEmpty(this.props.user) && this.props.isLogin) {
            this.props.dispatch(userActions.getCurrentUser())
        }

    }

    handleSingOut(e) {
        e.preventDefault()
        this.props.dispatch(authActions.signOut())
    }

    render() {
        let name, middleName = null
        const { isAdmin } = this.props
        if (!_.isEmpty(this.props.user)) {
            name = this.props.user.name
            middleName = this.props.user.middleName
        }
        return (
            <div className="b-header">
                <div className="b-inner">
                    {this.props.isLogin ?
                        <div className="b-header__block">
                            <span>{name} {middleName}</span>
                            <ContextMenu>
                                <Avatar alt="Avatar" src="/assets/images/avatar.png"/>
                                <div className="b-menu__inner">
                                    {/*
                                        isAdmin &&
                                        <MenuItem>
                                            <Link to="/admin">Админ Панель</Link>
                                        </MenuItem>
                                    */}
                                    <MenuItem>
                                        <Link to="/personal">Личный кабинет</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">Публикации</Link>
                                    </MenuItem>
                                    {
                                        isAdmin &&
                                        <MenuItem>
                                            <Link to="/my-page">Моя страница</Link>
                                        </MenuItem>
                                    }
                                    <MenuItem>
                                        <Link to="/" onClick={(e) =>this.handleSingOut(e)}>Выйти</Link>
                                    </MenuItem>
                                </div>
                            </ContextMenu>
                        </div>
                        :
                        <ul>
                            <li><Link to="/login">Вход</Link></li>
                            <li><Link to="/registration">Регистрация</Link></li>
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: authSelectors.isLogin(state),
        user: userSelectors.getCurrentUser(state),
        isAdmin: authSelectors.isAdmin(state),
    }
}


export default connect(mapStateToProps)(Header)