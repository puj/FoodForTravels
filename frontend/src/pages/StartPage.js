import React from 'react'
import styled from 'styled-components/macro'

//import { Header } from '../components/Header'
//import { Footer } from '../components/Footer'
import { Searchbar } from '../components/Searchbar'
//import { CreatePost } from '../components/CreatePost'
//import { LogIn } from './LogIn'
//import { Create } from './Create'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: #d7ecf3;
`

export const StartPage = () => {
  return (
    <>
      <Wrapper>
        <Searchbar />
      </Wrapper>
    </>
  )
}
