import React from 'react'
import Header from '../layouts/header'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import View from './view'
import Edit from './edit'
import autobind from 'react-autobind'

export default class MyPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isEdit: false
        }

        autobind(this)
    }

    handleCloseEditMode() {
        this.setState({isEdit: false})
    }

    handleOpenEditMode() {
        this.setState({isEdit: true})
    }

    render() {
        return (
            <div className="b-main">
                <Header/>
                <div className="b-inner">
                    <div className="b-mypage">
                        <Avatar alt="Avatar" src="/assets/images/avatar.png" className="b-avatar big" />
                        {this.state.isEdit ? <Edit onCloseEditMode={this.handleCloseEditMode} /> : <View/> }
                    </div>
                    {!this.state.isEdit 
                    ? 
                        <div>
                            <Button variant="contained" className="b-button" onClick={this.handleOpenEditMode}>Редактировать</Button>
                        </div>
                    :
                        null
                    }
                </div>
            </div>
        )
    }
}
