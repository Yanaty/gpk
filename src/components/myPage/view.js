import React from 'react'

export default class View extends React.Component {

    render() {
        const {name, middleName, surname, email, code} = this.props.user
        return (
            <div className="b-personal__top">
                <div className="b-personal__top__view">
                    <div className="b-personal__fio">{surname} {middleName} {name}</div>
                    <div className="b-personal__email">{email}</div>
                    <div className="b-personal__row">{code}</div>
                </div>
            </div>
        )
    }
}
