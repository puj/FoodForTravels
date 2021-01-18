import React from 'react'
import styled from 'styled-components'
//import { BrowserRouter, Switch } from 'react-router-dom'
import { StartPage } from './pages/StartPage'

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content;
  `

export const App = () => {
  return (
    <MainWrapper>
      <StartPage/>
    </MainWrapper>
  )
}
