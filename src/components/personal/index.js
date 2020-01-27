import React from 'react'
import Header from '../layouts/header'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import autobind from 'react-autobind'
import PersonalInfo from './personalInfo'
import CreatePost from './createPost'
import MyPosts from './myPosts'
import Referrals from './referrals'
import * as authSelectors from "../../store/auth/reducer"
import {connect} from "react-redux";
import * as userSelectors from "../../store/user/reducer"
import * as userActions from "../../store/user/actions"
import APIServices from '../../services'

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        autobind(this)
    }

    componentDidMount() {
        this.props.dispatch(userActions.getCurrentUser())
    }

    handleChange(event, newValue) {
        this.setState({value: newValue})
    }

    render() {
        const {isAdmin} = this.props
        return (
            <div className="b-main">
                <Header/>
                <div className="b-inner">
                    <AppBar position="static" color="default">
                        <Tabs indicatorColor="primary" textColor="primary" value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                            <Tab label="Персональные данные" {...a11yProps(0)} />
                            <Tab label="Рефералы" {...a11yProps(1)} />
                            { isAdmin && <Tab label="Создание статьи" {...a11yProps(2)} /> }
                            { isAdmin && <Tab label="Мои публикации" {...a11yProps(3)} /> }
                        </Tabs>
                    </AppBar>
                    <div
                        hidden={this.state.value !== 0}
                        id={`simple-tabpanel-0`}
                        aria-labelledby={`simple-tab-0`} >
                        <PersonalInfo user={this.props.user}/>
                    </div>
                    <div
                        hidden={this.state.value !== 1}
                        id={`simple-tabpanel-1`}
                        aria-labelledby={`simple-tab-1`} >
                        <Referrals/>
                    </div>
                    { isAdmin && <div
                        hidden={this.state.value !== 2}
                        id={`simple-tabpanel-2`}
                        aria-labelledby={`simple-tab-2`} >
                        <CreatePost/>
                    </div> }
                    { isAdmin && <div
                        hidden={this.state.value !== 3}
                        id={`simple-tabpanel-3`}
                        aria-labelledby={`simple-tab-3`} >
                        <MyPosts user={this.props.user}/>
                    </div> }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        regError: authSelectors.getRegError(state),
        isLogin: authSelectors.isLogin(state),
        isAdmin: authSelectors.isAdmin(state),
        user: userSelectors.getCurrentUser(state)
    }
}


export default connect(mapStateToProps)(Personal)