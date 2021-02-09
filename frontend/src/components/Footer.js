import React from 'react'

import {StyledFooter, StyledSubtitle, GithubIcon } from './styles/FooterStyle'

export const Footer = () => {

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
