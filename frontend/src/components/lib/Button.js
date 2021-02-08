import React from 'react'
import {StyledButton} from '../styles/ButtonStyle'

export const Button = ({ logoutbutton, backbutton, buttonText, buttonType, onClickFunction }) => {
    return (
      <StyledButton backbutton={backbutton} logoutbutton={logoutbutton} type={buttonType} onClick={onClickFunction}>
        {buttonText}
      </StyledButton>
    )
  }