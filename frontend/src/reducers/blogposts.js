import { createSlice } from '@reduxjs/toolkit'
import { GET_BLOGPOST_URL } from '../urls'

const initialState = {
  posts: localStorage.blogposts || [],
  tags: localStorage.tags || [],
  errorMessage: ''
}

export const blogposts = createSlice({
  name: 'blogposts',
  initialState,
  reducers: {
    setBlogposts: (state, action) => {
      const blogposts = action.payload
      state.posts = [...state.posts, ...blogposts]
    },
     setTags: (state, action) => {
          const tags = action.payload
          state.tags = [...state.tags, tags] //removed ...tags because it sliced the string up in characters
     },
     setClearTags: (state) => {
       state.tags = []
     },
     setClearBlogposts: (state) => {
       state.posts = []
     },
     setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.blogposts.errorMessage = errorMessage
    },
  }
})

export const getPosts = (tags) => {
  console.log('tags in fetch:',tags)
  return (dispatch) => {
    fetch(GET_BLOGPOST_URL(tags), {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not get any posts')
        }
        return res.json()
      })
      .then((json) => {
        console.log(json)
        dispatch(blogposts.actions.setBlogposts(json))
      })
      .then(() => {
        dispatch(blogposts.actions.setClearTags())
      })
      .catch((err) => {
        dispatch(blogposts.actions.setErrorMessage({ errorMessage: err.toString() }))
      })
  }
}
