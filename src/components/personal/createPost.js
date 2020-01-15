import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <div className="b-create">
               <div className="b-form">
                    <div className="b-form__row">
                        <TextField fullWidth
                            className="b-rorm__field"
                            id="email-input"
                            label="Заголовок"
                            variant="outlined"
                        />
                    </div>
                    <div className="b-form__row">
                        <TextField fullWidth
                            className="b-rorm__field"
                            id="email-input"
                            label="Тема"
                            variant="outlined"
                        />
                    </div>
                    <div className="b-form__row">
                        Описание
                        <ReactQuill value={this.state.text}
                                    onChange={this.handleChange} />
                        Общедоступная статья
                    </div>
                    <div className="b-form__row b-form__row_flex-jb">
                        <Button variant="contained" className="b-button b-mr20">Отправить</Button>
                    </div>
                </div>
            </div>
        )
    }
}