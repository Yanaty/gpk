import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import ContextMenu from './contextMenu'

export default function Login() {

    const [isLogin, setIsLogin] = React.useState(true)
    
    return (
        <div className="b-header">
            <div className="b-inner">
                {isLogin ?
                    <div>
                        <ContextMenu>
                            <Avatar alt="Avatar" src="/assets/images/avatar.png"/>
                            <div className="b-menu__inner">
                                <MenuItem>
                                    <Link to="/admin">Админ Панель</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/personal">Личный кабинет</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/">Публикации</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/my-page">Моя страница</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/">Выйти</Link>
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
