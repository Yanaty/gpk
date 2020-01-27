import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {Link} from "react-router-dom";
import moment from "moment";
import APIServices from "../../services";
import autoBind from 'react-autobind'

export default class Personal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: '',
            topic: '',
            description: '',
            generalAvailability: false
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

        /*const data = {
            header: this.state.header,
            topic: this.state.topic,
            description: this.state.description,
            generalAvailability: this.state.generalAvailability,
        }
        id: 5
header: "В частности, базовый вектор развития говорит о возможностях поставленных обществом задач."
topic: "В частности, базовый вектор развития говорит о возможностях поставленных обществом задач."
description: "И нет сомнений, что представители современных социальных резервов, превозмогая сложившуюся непростую экономическую ситуацию, заблокированы в рамках своих собственных рациональных ограничений. А также сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, разоблачены. Для современного мира курс на социально-ориентированный национальный проект однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив. Имеется спорная точка зрения, гласящая примерно следующее: тщательные исследования конкурентов являются только методом политического участия и своевременно верифицированы. С учётом сложившейся международной обстановки, реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений. Есть над чем задуматься: представители современных социальных резервов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть описаны максимально подробно."
date: "2020-01-17"
generalAvailability: false
authorId: 1
imagePublicationList: []

        */
        const data = {
            header: this.state.header,
            topic: this.state.topic,
            description: this.state.description,
            generalAvailability: this.state.generalAvailability,
        }

        APIServices.savePublication(data)
            .then(answer => {
                console.log('ready')
            }).catch(err => {
                console.log('err', err)
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
                                    name="description"
                                    id="description-input"
                                    required
                                    onChange={this.handlerDescription} />

                    </div>
                   <div className="b-form__row">
                       <input className="b-checkbox" type="checkbox" id="formTerms" name="formTerms" onChange={this.checkboxClick}/>
                       <label className="b-label" htmlFor="formTerms" >
                           <span>Общедоступная статья</span>
                       </label>
                   </div>
                    <div className="b-form__row b-form__row_flex-jb">
                        <Button variant="contained" className="b-button b-mr20" type="submit">Отправить</Button>
                    </div>
                </form>
            </div>
        )
    }
}