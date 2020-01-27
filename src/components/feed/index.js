import React from 'react'
import Header from '../layouts/header'
import List from './list'
import { connect } from 'react-redux'
import * as publicationsActions from '../../store/publications/actions'
import * as publicationsSelectors from '../../store/publications/reducer'

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(publicationsActions.fetchPublications());
    }

    render() {
        return (
            <div className="b-main">
                <Header/>
                <div className="b-inner">
                    <List publications={this.props.publications} distributors={this.props.distributors}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        publications: publicationsSelectors.getPublications(state),
        distributors: publicationsSelectors.getDistributors(state)
    }
}

export default connect(mapStateToProps)(Feed)
