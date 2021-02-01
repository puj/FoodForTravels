import React, { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { login, signUp } from '../reducers/user'

import { Button } from './reusable/Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 50%;
  min-height: 50%;
  background: #fff;
  padding: 10px;
`
const Label = styled.label`
  margin: 10px;
`
const Input = styled.input`
  margin-left: 10px;
  padding: 2px;
  border: none;
  background: #d7ecf3;
`
const ImageLabel = styled.label`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`
const PlusSign = styled.span`
  font-size: 2em;

  @media screen and (min-width: 768px) {
    font-size: 2.5em;
  }
`
const ImageUploadDiv = styled.div`
  background: #d7ecf3;
  border-radius: 10px;
  width: 150px;
  padding: 5px;

  @media screen and (min-width: 768px) {
    width: 200px;
    padding: 15px;
  }
`
const Filename = styled.p`
  font-size: 1em;
  font-weight: 600;
`

export const Form = ({ alreadyUser, newUser }) => {
  const dispatch = useDispatch()
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const accesstoken = useSelector(store => store.user.login.accessToken)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fileName, setFileName] = useState('')
  const fileInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSignUp = () => {
    console.log('file:', fileInput)
    dispatch(signUp(username, email, password, fileInput))
  }

  const handleLogin = () => {
      dispatch(login(username, password))
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
          {/* How can I make sure that this link only works if the is an accesstoken?*/}
          <Link to={accesstoken?'/':'/login'}>
          <Button
            buttonType='submit'
            buttonText='Log In'
            onClickFunction={handleLogin}
          />
          </Link>
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

          <ImageUploadDiv>
            <ImageLabel>
              Upload a profileimage
              <PlusSign>+</PlusSign>
              <Input
                type='file'
                style={{ display: 'none' }}
                ref={fileInput}
                placeholder='Image'
                onChange={(event) => setFileName(event.target.files[0].name)}
                id='avatar'
                name='avatar'
                accept='image/png, image/jpeg'
              />
            </ImageLabel>
          </ImageUploadDiv>
          <Filename>{fileName}</Filename>

          <div>
            <Link to={accesstoken? `/`:`/signup`}>
            <Button
              buttonType='submit'
              buttonText='Sign Up'
              onClickFunction={handleSignUp}
            />
            </Link>
          </div>
        </>
      )}
      {errorMessage && <p>{`${errorMessage}`}</p>}
    </StyledForm>
  )
}
