import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export const Header = () => {
  const accesstoken = useSelector((store) => store.user.login.accessToken)

  const StyledHeader = styled.header`
    background: #353539;
    position: relative;
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

  const Links = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;

    @media (min-width: 768px) {
      right: 0;
    }
  `

  const LinkText = styled.p`
    color: #fff;
    margin: 5px;
    &:hover {
        transform: scale(1.1);
    }
  `

  return (
    <StyledHeader>
      <Title>FOOD FOR TRAVELS</Title>
      <SubTitle>The ultimate guide to food on you vacation</SubTitle>
      {accesstoken ? (
        <Link to='/'>Home</Link>
      ) : (
        <Links>
          <Link to='/'><LinkText>Home</LinkText></Link>
          <Link to='/signup'><LinkText>Sign Up</LinkText></Link>
          <Link to='/login'><LinkText>Log in</LinkText></Link>
        </Links>
      )}
    </StyledHeader>
  )
}
