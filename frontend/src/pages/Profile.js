import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from 'reducers/user'

import { CreatePost } from '../components/CreatePost'
import { Card } from '../components/reusable/Card'
import { Button } from '../components/reusable/Button'
import { Wrapper } from '../components/reusable/Containers'

export const Profile = () => {
  const username = useSelector((store) => store.user.login.username)
  const accesstoken = useSelector((state) => state.user.login.accessToken)
  const imageurl = useSelector((state) => state.user.login.profileImage)
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
    console.log('ImageURL in profile:', imageurl)
    console.log('Username in profile:', username)
    return (
      <Wrapper>
        <h1>{`Hello ${username}!`}</h1>
        <Card profile imageurl={imageurl} username={username} heading={username} innertext='This is an innertext'/>
        {/* <CreatePost /> */}
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
