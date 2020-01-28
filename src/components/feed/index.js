import React from 'react'
import Header from '../layouts/header'
import List from './list'
import Button from '@material-ui/core/Button'
import APIServices from "../../services"
import autoBind from 'react-autobind'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            publications: null,
            distributors: null
        }

        autoBind(this)
    }

    componentDidMount() {
        //this.props.dispatch(publicationsActions.fetchPublications(this.state.page));

        this.updatePublications()
    }

    updatePublications() {
        APIServices.getPublicationsPage(this.state.page).then(data => {
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
            <div className="b-main">
                <Header/>
                <div className="b-main__inner">
                    <div className="b-publications">
                        <List publications={this.state.publications} distributors={this.state.distributors}/>
                        <div className="b-feeds__btns">
                            <Button variant="outlined" disabled={isPrevDisabled} onClick={this.getPrevPublications}>Предыдущая</Button>
                            <Button variant="outlined" disabled={isNextDisabled} onClick={this.getNextPublications}>Следующая</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}