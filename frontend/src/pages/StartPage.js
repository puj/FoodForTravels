import React from 'react'
import styled from 'styled-components/macro'

//import { Header } from '../components/Header'
//import { Footer } from '../components/Footer'
import { Searchbar } from '../components/Searchbar'
import { Wrapper } from '../components/reusable/Containers'
//import { CreatePost } from '../components/CreatePost'
//import { LogIn } from './LogIn'
//import { Create } from './Create'

export const StartPage = () => {
  return (
    <>
      <Wrapper>
        <Searchbar />
      </Wrapper>
    </>
  )
}
