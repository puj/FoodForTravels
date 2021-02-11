import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { login, signUp } from '../reducers/user'

import { Button } from './lib/Button'
import {
  StyledForm,
  Label,
  Input,
  ImageLabel,
  PlusSign,
  ImageUploadDiv,
  Filename,
} from './styles/FormStyles'

export const Form = ({ alreadyUser, newUser }) => {
  const dispatch = useDispatch()
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const accesstoken = useSelector((store) => store.user.login.accessToken)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fileName, setFileName] = useState('')
  const fileInput = useRef()
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSignUp = () => {
    dispatch(signUp(username, email, password, fileInput))
  }

  const handleLogin = () => {
    dispatch(login(username, password))
  }

  useEffect(() => {
    if (accesstoken) {
      history.push('/');
    }
  }, [accesstoken, history])

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
              onClickFunction={handleLogin}
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
              <Button
                buttonType='submit'
                buttonText='Sign Up'
                onClickFunction={handleSignUp}
              />
          </div>
        </>
      )}
      {errorMessage && <p>{`${errorMessage}`}</p>}
    </StyledForm>
  )
}
