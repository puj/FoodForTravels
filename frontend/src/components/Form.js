import React from 'react'
import styled from 'styled-components/macro'

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
    background: #D7ECF3;
    `
export const Form = ({ newUser }) => {
  return (
    <StyledForm>
      <Label>
        Username:
        <Input type='text' />
      </Label>
      <Label>
        Password:
        <Input type='password' />
      </Label>
      {newUser && (
        <>
          <Label>
            Email:
            <Input type='email' />
          </Label>
          <Label>
            <Input
              type='file'
              id='avatar'
              name='avatar'
              accept='image/png, image/jpeg'
            />
          </Label>
        </>
      )}
    </StyledForm>
  )
}
