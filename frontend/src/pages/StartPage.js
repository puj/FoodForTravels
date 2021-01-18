import React from 'react'
import styled from 'styled-components/macro'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CreatePost } from '../components/CreatePost'
import { LogIn } from './LogIn'
import { Create } from './Create'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
background: #D7ECF3;
`

export const StartPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
      {/* <LogIn/> This should have it's own route */} 
      <CreatePost /> {/* This should have it's own route */}
      {/* <Create/> This will have its own route */}
      </Wrapper>
      <Footer/>
    </>
  )
}
