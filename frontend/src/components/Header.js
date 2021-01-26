import React from 'react'
import styled from 'styled-components/macro'

export const Header = () => {

    const StyledHeader = styled.header`
    background: #353539;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    `

    const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #fff;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 3.2em;
    }
    `

    const SubTitle = styled.h2`
    font-size: 1em;
    color: #fff;
    font-weight: 400;
    font-style: italic;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 1.2em;
    }
    `

    return (
        <StyledHeader>
            <Title>FOOD FOR TRAVELS</Title>
            <SubTitle>The ultimate guide to food on you vacation</SubTitle>
        </StyledHeader>
    )
}