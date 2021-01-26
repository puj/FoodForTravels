import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { StartPage } from './pages/StartPage'
import { Create } from './pages/Create'
import { LogIn } from './pages/LogIn'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  min-height: 100vh;
`

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
          </Switch>
          <Footer />
        </Router>
      </Main>
    </Provider>
  )
}
