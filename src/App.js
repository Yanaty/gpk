import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Login from './components/auth/login'
import Registration from './components/auth/registration'
import Reset from './components/auth/reset'
import Terms from './components/terms'
import Feed from './components/feed'
import Personal from './components/personal'
import './assets/scss/index.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'

function App () {
    return (
        <BrowserRouter>
            <div className="b-root__inner">
                <div className="b-app">
                    <PerfectScrollbar>
                        <Switch>
                            <Route exact path='/' component={Feed} />
                            <Route path='/login' component={Login} />
                            <Route path='/registration' component={Registration} />
                            <Route path='/reset' component={Reset} />
                            <Route path='/terms' component={Terms} />
                            <Route path='/personal' component={Personal} />
                        </Switch>
                    </PerfectScrollbar>
                </div>
                <div className="b-footer">
                    <div className="b-inner">
                        <ul className="b-footer__list">
                            <li className="b-footer__list__item">
                                <Link to="/">
                                    <img className="b-logo" src='/assets/images/logo.png' alt="Гарант"/>
                                </Link>
                            </li>
                            <li className="b-footer__list__item">
                                <span>Контакты</span><br/>
                                <span>+79999999999</span>
                            </li>
                            <li className="b-footer__list__item">
                                <Link to="/terms">Политика Конфиденциальности</Link><br/>
                                <span>copyright &copy; 2019</span>
                            </li>
                            <li className="b-footer__list__item">
                                <Link to="/">Обратная связь</Link><br/>
                                <a className="b-footer__link" href="mailto:gpk@gmail.com">gpk@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App