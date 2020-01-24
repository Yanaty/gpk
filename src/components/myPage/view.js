import React from 'react'

export default class View extends React.Component {

    render() {
        const {name, middleName, surname} = this.props.user
        return (
            <div className="b-personal__top">
                <div>
                    <div className="b-personal__fio">{surname} {middleName} {name}</div>
                    <div className="b-personal__email">admin@admin.ru</div>
                    <div className="b-personal__row">2025550121</div>
                </div>
            </div>
        )
    }
}
