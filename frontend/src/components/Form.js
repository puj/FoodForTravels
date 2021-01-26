import React, { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { handleLogin, signUp } from '../reducers/user'

import { Button } from './Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 50%;
  min-height: 50%;
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
const ImageLabel = styled.label`
  font-size: 10px;
`
//Choose wether to have plussign or not
const PlusSign = styled.span`
  display: none;
  font-size: 3em;
  position: absolute;
`
const ImageUploadDiv = styled.div`
  background: #d7ecf3;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 15px;
`
const Filename = styled.p`
  font-size: 1em;
  font-weight: 600;
`

export const Form = ({ alreadyUser, newUser }) => {
  const dispatch = useDispatch()
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fileName, setFileName] = useState('')
  const fileInput = useRef()

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

          <ImageUploadDiv>
            <ImageLabel>
              Choose profileimage
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
