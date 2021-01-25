import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin, signUp } from '../reducers/user'

import { Button } from './Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #353539;
  max-width: 50%;
  background: #fff;
`
const Label = styled.label`
  margin: 10px;
`
const Input = styled.input`
  margin-left: 10px;
  border: none;
  background: #d7ecf3;
`

export const Form = ({ alreadyUser, newUser }) => {
  const dispatch = useDispatch()
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = (event) => {
  event.preventDefault()
}

const handleSignUp = () => {
  dispatch(signUp(username, email, password))
}

  return (
    <StyledForm onSubmit={handleSubmit}>
      {alreadyUser && (
        <>
          <Label>
            Username:
            <Input
              required
              type='text'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Label>
          <Label>
            Password:
            <Input
              required
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Label>
          <Button
            buttonType='submit'
            buttonText='Log In'
            onClickFunction={() => dispatch(handleLogin(username, password))}
          />
        </>
      )}
      {newUser && (
        <>
          <Label>
            Username:
            <Input
              required
              type='text'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Label>
          <Label>
            Password:
            <Input
              required
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Label>
          <Label>
            Email:
            <Input
              required
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Label>
          <Label>
            <Input
              type='file'
              id='avatar'
              name='avatar'
              accept='image/png, image/jpeg'
            />
          </Label>
          <Button
            buttonType='submit'
            buttonText='Log In'
            onClickFunction={handleSignUp}
          />
        </>
      )}
      {errorMessage && <p>{`${errorMessage}`}</p>}
    </StyledForm>
  )
}
