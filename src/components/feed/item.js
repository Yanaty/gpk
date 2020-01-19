import React from 'react'

export default class Item extends React.Component {
    render() {
        const {item} = this.props
        return (
            <div className="b-feed">
                <div className="b-feed__author">{item.authorId}</div>
                <div className="b-feed__date">{item.date}</div>
                <h3 className="b-feed__title">{item.header}</h3>
                <div className="b-feed__content">
                    <h4>{item.topic}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        )
    }
}
