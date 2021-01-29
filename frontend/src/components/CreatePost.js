import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'

import { createBlogPost } from 'reducers/user'

/* import { BlogPostInput } from './BlogPostInput' */
import { Button } from '../components/reusable/Button'

const CreatePostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #fff;
  padding: 2em;
`

export const CreatePost = () => {
  const dispatch = useDispatch()
  //const author = useSelector((store) => store.user.login.username)
  const id = useSelector((store) => store.user.login.userId)
  //const accesstoken = useSelector((store) => store.user.login.accessToken)
  const [title, setTitle] = useState('')
  const [blogText, setBlogText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const sendPost = () => {
    dispatch(createBlogPost( id, /* author, */ title, blogText))
  }

  return (
    <CreatePostWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='text'
          placeholder='Add text'
          value={blogText}
          onChange={(event) => setBlogText(event.target.value)}
        />
        {/* <BlogPostInput titlevalue={title} textvalue={blogText} /> */}
        <Button
          buttonText='Add post'
          buttonType='submit'
          onClickFunction={sendPost}
        />
      </form>
    </CreatePostWrapper>
  )
}
