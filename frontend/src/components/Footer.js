import React from 'react'
import styled from 'styled-components/macro'

import { ReactComponent as Icon } from '../assets/github.svg'

export const Footer = () => {
  const StyledFooter = styled.footer`
    background: #353539;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 0;
    text-align: center;
    padding: 10px;
  `
  const StyledSubtitle = styled.h3`
    color: #fff;
    font-size: 14px;
    font-weight: 200;
    margin: 0;
    @media (min-width:1024px) {
      margin: 5px;
    }
  `
  const GithubIcon = styled(Icon)`
    width: 30px;
    fill: #fff;
    height: 30px;
  `

  return (
    <StyledFooter>
      <StyledSubtitle>
        This site was created by Emelie Svensson as a final project for the
        Technigo bootcamp 20/21
      </StyledSubtitle>
      <a
        href='https://github.com/emeliesv'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GithubIcon/>
      </a>
    </StyledFooter>
  )
}
