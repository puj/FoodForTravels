import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from 'reducers/user'
import { Button } from './lib/Button'
import {StyledHeader, Title, SubTitle, Links, LinkText } from './styles/HeaderStyle'

export const Header = () => {
  const accesstoken = useSelector((store) => store.user.login.accessToken)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <StyledHeader>
      <Title>FOOD FOR TRAVELS</Title>
      <SubTitle>The ultimate guide to food on you vacation</SubTitle>
      {accesstoken ? (
        <Links>
          <Link to='/'>
            <LinkText>Home</LinkText>
          </Link>
          <Link to='/'>
            <Button
              buttonText='Log out'
              onClickFunction={handleLogout}
              logoutbutton={true}
            />
          </Link>
        </Links>
      ) : (
        <Links>
          <Link to='/'>
            <LinkText>Home</LinkText>
          </Link>
          <Link to='/signup'>
            <LinkText>Sign Up</LinkText>
          </Link>
          <Link to='/login'>
            <LinkText>Log in</LinkText>
          </Link>
        </Links>
      )}
    </StyledHeader>
  )
}
