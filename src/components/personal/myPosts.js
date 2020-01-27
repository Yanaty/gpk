import React from 'react'
import Feeds from '../feed/list'
import * as userActions from "../../store/user/actions";
import APIServices from "../../services";

export default class MyPosts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            publications: null,
            distributors: null
        }
    }
    componentDidMount() {
        const userId = this.props.user.id
        console.log('current user', this.props.user)
        APIServices.getPublicationsPageByDistributorId(userId, 0).then(data => {
            console.log('data publ', data)
            this.setState({publications: data.publications, distributors: data.distributors})
        })
    }
    render() {
        return (
            <Feeds publications={this.state.publications} distributors={this.state.distributors}/>
        )
    }
}