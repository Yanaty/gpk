import React from 'react'
import parse from 'html-react-parser'
import moment from 'moment'

export default class Item extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowdescription: false,
            isShowButton: true
        }
    }

    showMore = () => {
        this.setState({isShowButton: false, isShowdescription: true})
    }
    render() {
        const {item, author} = this.props
        return (
            <div className="b-feed">
                <h3 className="b-feed__title">{item.header}</h3>
                <div className="b-flex">
                    <div className="b-feed__date">{moment(item.date).format('DD.MM.YYYY')}</div>
                    <div className="b-feed__author">{author.name} {author.surname}</div>
                </div>
                <div className="b-feed__topic">{item.topic}</div>
                { this.state.isShowButton && <div className="b-feed__showmore" onClick={this.showMore}>Показать полностью...</div> }
                { this.state.isShowdescription && <div className="b-feed__content">
                    {parse(item.description)}
                </div> }
            </div>
        )
    }
}
