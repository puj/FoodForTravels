import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from 'reducers/user'

import { CreatePost } from '../components/CreatePost'
import { Button } from '../components/reusable/Button'

export const BlogFeed = () => {
  const username = useSelector(store => store.user.login.username)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <h1>{`Hello ${username}!`}</h1>
      <CreatePost />
      <Link to='/'>
        <Button buttonText='Log out' onClickFunction={handleLogout} />
      </Link>
    </>
  )
}
