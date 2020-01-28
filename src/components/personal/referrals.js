import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import APIServices from '../../services'

const createData = (id, name, surname, phone, email) => {
    return { id, name, surname, phone, email };
}

export default class Referrals extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            refferals: []
        }
    }
    componentDidMount() {
        APIServices.getCurrentDistributorReferralsByPage(0).then(data => {
            this.setState({refferals: data})
        })
    }

    render() {
        const rows = []
        this.state.refferals.forEach((item, index) => {
            rows.push(createData(item.id, item.name, item.surname, item.phoneNumber, item.email))
        })
        return (
            <div className="b-refferals__block">
                <h3 >Рефералы</h3>
                {rows.length === 0 ?
                    <div> Данных нет</div> :
                    <TableContainer component={Paper}>
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
                }
            </div>
        )
    }
}