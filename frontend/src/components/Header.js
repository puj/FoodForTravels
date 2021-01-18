import React from 'react'
import styled from 'styled-components/macro'

export const Header = () => {

    const StyledHeader = styled.header`
    background: #353539;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

    const StyledH1 = styled.h1`
    font-size: 40px;
    color: #fff;
    margin: 0;
    `

    const StyledH2 = styled.h2`
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    font-style: italic;
    `

    return (
        <StyledHeader>
            <StyledH1>FOOD FOR TRAVELS</StyledH1>
            <StyledH2>The ultimate guide to food on you vacation</StyledH2>
        </StyledHeader>
    )
}