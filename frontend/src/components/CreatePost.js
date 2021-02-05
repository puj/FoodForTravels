import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Editext from 'react-editext'
import TagsInput from 'react-tagsinput'

import { createBlogPost } from 'reducers/user'

import { Button } from './lib/Button'
import { StyledForm } from './styles/FormStyles'
import { CreatePostWrapper, Tagdiv } from './styles/Containers'

export const CreatePost = () => {
  const dispatch = useDispatch()
  const userid = useSelector((store) => store.user.login.userId)
  const accesstoken = useSelector((store) => store.user.login.accessToken)
  const [title, setTitle] = useState('')
  const [blogText, setBlogText] = useState('')
  const [tags, setTags] = useState([])
  const [tag, setTag] = useState('')

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
      <StyledForm onSubmit={handleSubmit}>
        <Editext
          type='text'
          value={!title ? 'Enter title here' : title}
          onSave={(event) => setTitle(event.target.value)}
        />
        <Editext
          type='textarea'
          value={!blogText ? 'Start writing you post here' : blogText}
          onSave={(event) => setBlogText(event.target.value)}
        />
        <Tagdiv>
          Add tags to your post by pressing 'Enter', remove by pressing
          'Backspace'
          <TagsInput
            inputValue={tag}
            onChangeInput={(inputTag) => setTag(inputTag)}
            value={tags}
            onChange={(addTags) => setTags(addTags)}
          />
        </Tagdiv>
        {/* <input
          type='text'
          value={title}
          placeholder='Add title here'
          onChange={(event) => setTitle(event.target.value)}
        /> */}
        {/*<input
          type='textarea'
          rows='4'
          value={blogText}
          placeholder='Add your blogtext here'
          onChange={(event) => setBlogText(event.target.value)}
        /> */}
        {/* <input
          type='text'
          value={tags}
          placeholder='Enter your tags'
          onChange={(event) => setTags([event.target.value])}
        /> */}
        <Button
          buttonText='Add post'
          buttonType='submit'
          onClickFunction={sendPost}
        />
      </StyledForm>
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
