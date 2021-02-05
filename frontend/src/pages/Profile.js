import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout, user, addUserDescription } from 'reducers/user'

import { Card } from '../components/lib/Card'
import { Button } from '../components/lib/Button'
import { Wrapper } from '../components/styles/Containers'

export const Profile = () => {
  const username = useSelector((store) => store.user.login.username)
  const accesstoken = useSelector((state) => state.user.login.accessToken)
  const imageurl = useSelector((state) => state.user.login.profileImage)
  const description = useSelector((state) => state.user.login.description)
  const userId = useSelector((state) => state.user.login.userId)
  const dispatch = useDispatch()
  const [userDescription, setUserDescription] = useState('')

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleOnClick = (event) => {
    event.preventDefault()
    console.log('desc:', userDescription)
    dispatch(addUserDescription(userId, accesstoken, userDescription))
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
        <h1>{`Hello ${username}!`}</h1>
        <Card
          profile
          imageurl={imageurl}
          username={username}
          heading={username}
          innertext={!description ? (
            <>
            Add a description
            <form>
              <input type='textarea'
              rows='4'
              value={userDescription}
              onChange={(event) => setUserDescription(event.target.value)} />
              <Button
                buttonText='Add description'
                buttonType='Submit'
                onClickFunction={handleOnClick}
              />
            </form>
            </>
          ):description}
        />
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
