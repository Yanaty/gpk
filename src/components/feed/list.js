import React from 'react'
import Item from './item'

export default class List extends React.Component {
    render() {
        const {publications} = this.props
        let rows = [];
        console.log('publ', publications)
        if (Array.isArray(publications)) {
            publications.forEach((item) => {
                rows.push(<Item item={item} key={item.id}/>);
            })
        }
        return (
            <div className="b-feeds">
                {rows}
            </div>
        )
    }
}
