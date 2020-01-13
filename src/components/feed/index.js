import React from 'react'
import Header from '../layouts/header'
import List from './list'

export default class Feed extends React.Component {
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
