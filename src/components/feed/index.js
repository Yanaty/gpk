import React from 'react'
import Header from '../layouts/header'
import List from './list'
import { connect } from 'react-redux'
import * as publicationsActions from '../../store/publications/actions'

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('this props', publicationsActions);
        this.props.dispatch(publicationsActions.fetchPublications());
    }

    render() {
        return (
            <div className="b-main">
                <Header/>
                <div className="b-inner">
                    <List/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(Feed)
