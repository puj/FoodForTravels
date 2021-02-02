import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Editext from 'react-editext'

import { createBlogPost } from 'reducers/user'

/* import { BlogPostInput } from './BlogPostInput' */
import { Button } from '../components/reusable/Button'
//import { CREATE_POST_URL } from '../urls'

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
  const userid = useSelector((store) => store.user.login.userId)
  const accesstoken = useSelector((store) => store.user.login.accessToken)
  const [title, setTitle] = useState('')
  const [blogText, setBlogText] = useState('')
  const [tags, setTags] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  const sendPost = () => {
    dispatch(createBlogPost(userid, accesstoken, title, blogText, tags))
    setTitle('')
    setBlogText('')
    setTags([])
  }

  return (
    <CreatePostWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          placeholder='Add title here'
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='textarea'
          rows='4'
          value={blogText}
          placeholder='Add your blogtext here'
          onChange={(event) => setBlogText(event.target.value)}
        />
        <input
          type='text'
          value={tags}
          placeholder='Enter your tags'
          onChange={(event) => setTags([event.target.value])}
        />
        <Button
          buttonText='Add post'
          buttonType='submit'
          onClickFunction={sendPost}
        />
      </form>
    </CreatePostWrapper>
  )
}
{
  /* <input
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
        /> */
}
