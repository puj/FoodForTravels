import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Icon } from './github.svg'

export const Footer = () => {
  const StyledFooter = styled.footer`
    background: #353539;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    bottom: 0;
  `
  const StyledH3 = styled.h3`
    color: #fff;
    font-size: 14px;
    font-weight: 200;
    margin: 0;
  `
  const GithubIcon = styled(Icon)`
    width: 30px;
    fill: #fff;
    height: 30px;
  `

  return (
    <StyledFooter>
      <StyledH3>
        This site was created by Emelie Svensson as a final project for the
        Technigo bootcamp 20/21
      </StyledH3>
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
