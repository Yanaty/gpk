import React from 'react'
import Header from '../layouts/header'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import autobind from 'react-autobind'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }

        autobind(this)
    }

    render() {
        return (
            <div className="b-main">
                La la la la personal info
            </div>
        )
    }
}