import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { StartPage } from './pages/StartPage'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { Profile } from './pages/Profile'
import {Create } from './pages/Create'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/styles/Containers'

const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={StartPage} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={LogIn} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/CreatePost' exact component={Create} />
            {/* <Route path={`/users/${id}/blogposts`} exact component={BlogFeed}/> */}
          </Switch>
          <Footer />
        </Router>
      </Main>
    </Provider>
  )
}
