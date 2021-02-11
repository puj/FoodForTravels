import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { createBlogPost } from 'reducers/user'

import { Button } from './lib/Button'
import { StyledForm } from './styles/FormStyles'
import {
  CreatePostWrapper,
  StyledEdiText,
  Tagdiv,
  StyledTagsInput,
} from './styles/Containers'
import './styles/overwrite.css'

export const CreatePost = () => {
  const dispatch = useDispatch()
  const userid = useSelector((store) => store.user.login.userId)
  const accesstoken = useSelector((store) => store.user.login.accessToken)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
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
      <Link to='/profile'>
        <Button backbutton={true} buttonText='Back' />
      </Link>
        <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledEdiText
            type='text'
            value={!title ? 'Enter title here' : title}
            onSave={(titleInput) => setTitle(titleInput)}
          />
          <StyledEdiText
            type='textarea'
            value={!blogText ? 'Start writing you post here' : blogText}
            onSave={(blogTextInput) => setBlogText(blogTextInput)}
          />
          <Tagdiv id='tagsinput'>
            Add tags to your post by pressing 'Enter', remove by pressing
            'Backspace'. Example: "London", "Tacos" etc.
            <StyledTagsInput
              inputValue={tag}
              onChangeInput={(inputTag) => setTag(inputTag)}
              value={tags}
              onChange={(addTags) => setTags(addTags)}
            />
          </Tagdiv>
          <Button
            buttonText='Add post'
            buttonType='submit'
            onClickFunction={sendPost}
          />
        </div>
      </StyledForm>
      {errorMessage && <p>{`${errorMessage}`}</p>}
        {/* <Button
        buttonText='Create another post'
        /> */}
    </CreatePostWrapper>
  )
}
