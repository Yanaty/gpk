import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

function createData(id, name, surname, phone, email) {
    return { id, name, surname, phone, email };
}

const rows = [
    createData(1,'Gerardo', 'Gat', 2025550121, 'giafly@me.com'),
    createData(2,'Kelley', 'Sars', 2025550121, 'techie@optonline.net'),
    createData(3,'Raymond', 'Peson', 2025550121, 'petersko@icloud.comm'),
    createData(4,'Clint', 'Mcdld', 2025550121, 'nogin@hotmail.com'),
    createData(6,'Wesley', 'Cuy', 2025550121, 'pereinar@hotmail.com'),
];

export default class Referrals extends React.Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <h3 className="b-ml20">Рефералы</h3>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Имя</TableCell>
                        <TableCell>Фамилия</TableCell>
                        <TableCell>Номер телефона</TableCell>
                        <TableCell>Почта</TableCell>
                        <TableCell align="right">Профиль</TableCell>
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
                            <TableCell align="right">
                                <Link to="/">Перейти</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}