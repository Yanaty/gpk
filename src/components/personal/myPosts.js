import React from 'react'
import Feeds from '../feed/list'
import * as userActions from "../../store/user/actions"
import APIServices from "../../services"
import autoBind from 'react-autobind'
import Button from '@material-ui/core/Button'

export default class MyPosts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            publications: null,
            distributors: null,
        }

        autoBind(this)
    }
    componentDidMount() {
        this.updatePublications()
    }

    updatePublications() {
        const userId = this.props.user.id
        APIServices.getPublicationsPageByDistributorId(userId, 0).then(data => {
            this.setState({publications: data.publications, distributors: data.distributors})
        })
    }

    getNextPublications() {
        this.setState((prevState) => {page: prevState.page++}, this.updatePublications)
    }

    getPrevPublications() {
        this.setState((prevState) => {page: prevState.page--}, this.updatePublications)
    }

    render() {
        let isNextDisabled = false;
        if (Array.isArray(this.state.publications)) {
            const length = this.state.publications.length
            isNextDisabled = length < 10 ? true : false;
        }
        let isPrevDisabled = this.state.page === 0 ? true : false
        return (
            <div className="b-publications">
                <Feeds publications={this.state.publications} distributors={this.state.distributors}/>
                <div className="b-feeds__btns">
                    <Button variant="outlined" disabled={isPrevDisabled} onClick={this.getPrevPublications}>Предыдущая</Button>
                    <Button variant="outlined" disabled={isNextDisabled} onClick={this.getNextPublications}>Следующая</Button>
                </div>
            </div>
            
        )
    }
}