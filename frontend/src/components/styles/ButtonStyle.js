import React from 'react'
import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  border-radius: 8px;
  background: #d7ecf3;
  color: #353539;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  ${({ logoutbutton }) =>
    logoutbutton &&
    `
  background: #353539;
  color: #d7ecf3;
  margin: 5px;
  &:hover {
    transform: scale(1.1);
  }
  `}
`
