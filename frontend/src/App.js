import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { StartPage } from './pages/StartPage'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { Profile } from './pages/Profile'
import { Create } from './pages/Create'
import { BlogFeed } from './pages/BlogFeed'
import { BlogPost } from './pages/BlogPost'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/styles/Containers'
import { blogposts } from 'reducers/blogposts'

const reducer = combineReducers({ user: user.reducer, blogposts: blogposts.reducer })
const store = configureStore({ reducer })

export const App = () => {
  //const [tags, setTags] = useState([])

  return (
    <Provider store={store}>
      <Router>
        <Main>
          <Header />
          <Switch>
            <Route path='/' exact component={StartPage}/>
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={LogIn} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/createPost' exact component={Create} />
            <Route path='/blogfeed' exact component={BlogFeed} />
            <Route path='/blogposts/:blogpostid' exact component={BlogPost} />
          </Switch>
          <Footer />
        </Main>
      </Router>
    </Provider>
  )
}
