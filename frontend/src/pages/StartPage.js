import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Searchbar } from '../components/Searchbar'
import { Wrapper } from '../components/reusable/Containers'
import { Button } from 'components/reusable/Button'
import { logout } from 'reducers/user'


export const StartPage = () => {
  const dispatch = useDispatch()
  const accesstoken = useSelector(state => state.user.login.accessToken)
  const username = useSelector(state => state.user.login.username)

  const handleLogout = () => {
    dispatch(logout())
  }

  if(!accesstoken) {
    return(
    <>
      <Wrapper>
        <Searchbar />
      </Wrapper>
    </>
  )} else {
    return (
     <Wrapper>
      <div>{`Welcome ${username}! You are logged in!`}</div>
      <Link to='/blogfeed'>
        <Button
        buttonText='Create new post'/>
      </Link>
      <Button 
      buttonText='Log Out!'
      onClickFunction={handleLogout}/>
    </Wrapper> 
    )
  }
}
