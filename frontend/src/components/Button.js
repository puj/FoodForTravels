import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
    border-radius: 8px;
    background: #D7ECF3;
    color: #353539;
`

export const Button = ({ buttonText, buttonType, onClickFunction }) => {
    return (
        <StyledButton type={buttonType} onClick={onClickFunction}>{buttonText}</StyledButton>
    )
}