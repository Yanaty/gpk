import React from 'react'
import Header from '../layouts/header'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import View from './view'
import Edit from './edit'
import autobind from 'react-autobind'
import * as userSelectors from '../../store/user/reducer'
import { connect } from 'react-redux'

class MyPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isEdit: false
        }

        autobind(this)
    }

    componentDidMount() {
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
                <div className="b-feed__inner">
                    <div className="b-mypage">
                        <div className="b-mypage__avatar"><Avatar alt="Avatar" src="/assets/images/avatar.png" className="b-avatar big" /></div>
                        {this.state.isEdit ? <Edit onCloseEditMode={this.handleCloseEditMode} user={this.props.user}/> : <View user={this.props.user}/> }
                    </div>
                    {!this.state.isEdit 
                    ? 
                        <div className="b-inner_pad">
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

const mapStateToProps = (state) => {
    return {
        user: userSelectors.getCurrentUser(state)
    }
}

export default connect(mapStateToProps)(MyPage)
