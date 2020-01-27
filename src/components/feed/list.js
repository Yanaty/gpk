import React from 'react'
import Item from './item'

export default class List extends React.Component {
    render() {
        const {publications} = this.props
        const {distributors} = this.props
        let rows = []
        if (Array.isArray(publications)) {
            publications.forEach((item) => {
                const authorId = item.authorId
                const author = distributors[authorId]
                rows.push(<Item item={item} author={author} key={item.id}/>);
            })
        }
        return (
            <div className="b-feeds">
                {rows}
            </div>
        )
    }
}
