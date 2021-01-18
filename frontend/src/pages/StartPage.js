import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CreatePost } from '../components/CreatePost'

export const StartPage = () => {
  return (
    <>
      <Header />
      <CreatePost />
      <Footer/>
    </>
  )
}
