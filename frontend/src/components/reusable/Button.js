import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  border-radius: 8px;
  background: #d7ecf3;
  color: #353539;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  ${({ logout }) =>
    logout &&`
     background: #353539;
    `}
`

export const Button = ({ buttonText, buttonType, onClickFunction }) => {
  return (
    <StyledButton type={buttonType} onClick={onClickFunction}>
      {buttonText}
    </StyledButton>
  )
}
