import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import APIServices from "../../services"
import autoBind from 'react-autobind'
import history from '../../history'


export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: '',
            topic: '',
            description: '',
            generalAvailability: false,
            isShowError: false
        }

        autoBind(this)
    }

    checkboxClick() {
        const bool = this.state.generalAvailability
        this.setState({generalAvailability : !bool})
    }

    handleUserInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            header: this.state.header,
            topic: this.state.topic,
            description: this.state.description,
            generalAvailability: this.state.generalAvailability,
        }

        APIServices.savePublication(data)
            .then(answer => {
                history.push('/')
            }).catch(err => {
                this.setState({isShowError: true})
            }).finally(() => {
                setTimeout(() => this.setState({isShowError: false}), 2000)
            })

    }

    handlerDescription = (value) => {
        this.setState({description: value})
    }

    render() {
        return (
            <div className="b-create">
               <form className="b-form createPost" onSubmit={this.handleSubmit}>
                    <div className="b-form__row">
                        <TextField fullWidth
                            className="b-form__field"
                            id="header-input"
                            label="Заголовок"
                            variant="outlined"
                            name="header"
                            value={this.state.header}
                            required
                            onChange={this.handleUserInput}
                        />
                    </div>
                    <div className="b-form__row">
                        <TextField fullWidth
                            className="b-form__field"
                            id="topic-input"
                            label="Тема"
                            variant="outlined"
                            name="topic"
                            value={this.state.topic}
                            required
                            onChange={this.handleUserInput}
                        />
                    </div>
                    <div className="b-form__row">
                        <h4>Описание</h4>
                        <ReactQuill value={this.state.description}
                                    id="description-input"
                                    required
                                    onChange={this.handlerDescription}
                                    
                                    />

                    </div>
                   <div className="b-form__row">
                       <input className="b-checkbox" type="checkbox" id="formTerms" name="formTerms" onChange={this.checkboxClick}/>
                       <label className="b-label" htmlFor="formTerms" >
                           <span>Общедоступная статья</span>
                       </label>
                   </div>
                    <div className="b-form__row">
                        <Button variant="contained" className="b-button b-mr20" type="submit">Отправить</Button>
                        {this.state.isShowError &&
                            <span className='error'>Ошибка!</span>
                        }
                    </div>
                </form>
            </div>
        )
    }
}