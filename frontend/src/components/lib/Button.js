import React from 'react'
import {StyledButton} from '../styles/ButtonStyle'

export const Button = ({ logoutbutton, buttonText, buttonType, onClickFunction }) => {
    return (
      <StyledButton logoutbutton={logoutbutton} type={buttonType} onClick={onClickFunction}>
        {buttonText}
      </StyledButton>
    )
  }