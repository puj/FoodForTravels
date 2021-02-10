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
        console.log('TAG PAYLOAD:', action.payload)
          const tags = action.payload
          state.tags = [...state.tags, ...tags]
          console.log('State tag:', state.tags)
     },
     setClearTags: (state, action) => {
       console.log('State before clear:', state.tags)
       state.tags = []
       console.log('state after clear:', state.tags)
     },
     setClearBlogposts: (state, action) => {
       console.log('Blogposts before clear:', state.posts)
       state.posts = []
       console.log('state.posts after clear:', state.posts)
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
