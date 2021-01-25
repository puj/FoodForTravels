import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { StartPage } from './pages/StartPage'
import { Create } from './pages/Create'
import { LogIn } from './pages/LogIn'

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content;
  `

  const reducer = combineReducers({ user: user.reducer})
  const store = configureStore({ reducer })
  
export const App = () => {
  return (
   <Provider store={store}>
     <Router>
       <Switch>
         <Route path='/' exact component={StartPage} />
         <Route path='/users' exact component={Create} />
         <Route path='/login' exact component={LogIn}/>
       </Switch>
     </Router>
   </Provider>
  )
}
