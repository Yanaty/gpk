import React from 'react'
import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom'
import Login from './components/auth/login'
import Registration from './components/auth/registration'
import Reset from './components/auth/reset'
import Terms from './components/terms'
import Feed from './components/feed'
import Personal from './components/personal'
import Admin from './components/admin'
import MyPage from './components/myPage'
import './assets/scss/index.scss'
import Scrollbar from 'react-scrollbars-custom'
import history from './history'

function App () {
    return (
        <Router history={history}>
            <div className="b-root__inner">
                <div className="b-app">
                    <Scrollbar>
                        <Switch>
                            <Route exact path='/' component={Feed} />
                            <Route path='/login' component={Login} />
                            <Route path='/registration' component={Registration} />
                            <Route path='/reset' component={Reset} />
                            <Route path='/terms' component={Terms} />
                            <Route path='/personal' component={Personal} />
                            <Route path='/admin' component={Admin} />
                            <Route path='/my-page' component={MyPage} />
                        </Switch>
                    </Scrollbar>
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
        </Router>
    )
}

export default App
