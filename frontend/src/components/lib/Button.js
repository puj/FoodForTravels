import React from 'react'
import {StyledButton} from '../styles/ButtonStyle'

export const Button = ({ linklogout, logoutbutton, backbutton, buttonText, buttonType, onClickFunction }) => {
    return (
      <StyledButton linklogout={linklogout} backbutton={backbutton} logoutbutton={logoutbutton} type={buttonType} onClick={onClickFunction}>
        {buttonText}
      </StyledButton>
    )
  }