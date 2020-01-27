import React from 'react'
import Header from '../layouts/header'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import ContextMenu from '../layouts/contextMenu'
import MenuItem from '@material-ui/core/MenuItem'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import APIServices from '../../services'


function createData(id, name, surname, phone, email, refCode) {
    return { id, name, surname, phone, email, refCode };
}

const rows = [
    createData(1,'Gerardo', 'Gat', 2025550121, 'giafly@me.com', 'c19d21', true),
    createData(2,'Kelley', 'Sars', 2025550121, 'techie@optonline.net', 'c19d21', true),
    createData(3,'Raymond', 'Peson', 2025550121, 'petersko@icloud.comm', 'c19d21', true),
    createData(4,'Clint', 'Mcdld', 2025550121, 'nogin@hotmail.com', 'c19d21', true),
    createData(6,'Wesley', 'Cuy', 2025550121, 'pereinar@hotmail.com', 'c19d21', true),
];

export default class Admin extends React.Component {

    componentDidMount() {
        APIServices.getDistributorsListByPage(0).then(data => {
            console.log('data', data)
        })
    }
    render() {
        return (
            <div className="b-main">
                <Header/>
                <div className="b-inner">
                    <TableContainer component={Paper}>
                        <h3 className="b-ml20">Пользователи</h3>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>Имя</TableCell>
                                <TableCell>Фамилия</TableCell>
                                <TableCell>Номер телефона</TableCell>
                                <TableCell>Почта</TableCell>
                                <TableCell>Реферальный код</TableCell>
                                <TableCell>Активация</TableCell>
                                <TableCell>Статус</TableCell>
                                <TableCell>Действия</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.surname}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.refCode}</TableCell>
                                    <TableCell>
                                        <Link to="/">Деактивировать</Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <CheckCircleOutlineIcon className="b-green"/>
                                    </TableCell>
                                    <TableCell align="center">
                                        <ContextMenu>
                                            <span className="b-menu__head">...</span>
                                            <div className="b-menu__inner">
                                                <MenuItem>
                                                    <Link to="/">Удалить</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="/">Заблокировать</Link>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Link to="/">Перейти</Link>
                                                </MenuItem>
                                            </div>
                                        </ContextMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
}
