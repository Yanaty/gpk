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

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }

        autobind(this)
    }

    handleChange(event, newValue) {
        this.setState({value: newValue})
    }

    render() {
        return (
            <div className="b-main">
                <Header/>
                <div className="b-inner">
                    <AppBar position="static" color="default">
                        <Tabs indicatorColor="primary" textColor="primary" value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                            <Tab label="Персональные данные" {...a11yProps(0)} />
                            <Tab label="Создание статьи" {...a11yProps(1)} />
                            <Tab label="Мои публикации" {...a11yProps(2)} />
                            <Tab label="Рефералы" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <div
                        hidden={this.state.value !== 0}
                        id={`simple-tabpanel-0`}
                        aria-labelledby={`simple-tab-0`} >
                        <PersonalInfo/>
                    </div>
                    <div
                        hidden={this.state.value !== 1}
                        id={`simple-tabpanel-1`}
                        aria-labelledby={`simple-tab-1`} >
                        <CreatePost/>
                    </div>
                    <div
                        hidden={this.state.value !== 2}
                        id={`simple-tabpanel-2`}
                        aria-labelledby={`simple-tab-2`} >
                        <MyPosts/>
                    </div>
                    <div
                        hidden={this.state.value !== 3}
                        id={`simple-tabpanel-3`}
                        aria-labelledby={`simple-tab-3`} >
                        <Referrals/>
                    </div>
                </div>
            </div>
        )
    }
}