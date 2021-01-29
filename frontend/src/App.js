import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { StartPage } from './pages/StartPage'
import { Create } from './pages/Create'
import { LogIn } from './pages/LogIn'
import { BlogFeed } from './pages/BlogFeed'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/reusable/Containers'

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
            <Route path='/users' exact component={Create} />
            <Route path='/login' exact component={LogIn} />
            <Route path='/blogfeed' exact component={BlogFeed} />
            {/* <Route path={`/users/${id}/blogposts`} exact component={BlogFeed}/> */}
          </Switch>
          <Footer />
        </Router>
      </Main>
    </Provider>
  )
}
