import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'reducers/user'

import { Card } from '../components/lib/Card'
import { Button } from '../components/lib/Button'
import { Wrapper } from '../components/styles/Containers'

export const Create = () => {
  const username = useSelector((store) => store.user.login.username)
  const accesstoken = useSelector((state) => state.user.login.accessToken)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!accesstoken) {
    return (
      <Wrapper>
        <Card heading='Oops!' innertext='You need to log in to see this page' />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
          <h1>Okay {username}, let's start blogging!</h1>
        <Card createpostpage />
        <Link to='/'>
          <Button
            logoutbutton={true}
            buttonText='Log out'
            onClickFunction={handleLogout}
          />
        </Link>
      </Wrapper>
    )
  }
}
