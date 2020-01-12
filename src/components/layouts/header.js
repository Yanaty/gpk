import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'

export default function Login() {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [isLogin, setIsLogin] = React.useState(true)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    return (
        <div className="b-header">
            <div className="b-inner">
                {isLogin ?
                    <div>
                        <Avatar alt="Avatar" src="/assets/images/avatar.png" onClick={handleClick}/>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Админ Панель</MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link to="/personal">Личный кабинет</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Публикации</MenuItem>
                        </Popover>
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
