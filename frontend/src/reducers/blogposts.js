import { createSlice } from '@reduxjs/toolkit'
import { GET_BLOGPOST_URL } from '../urls'

const initialState = {
  posts: localStorage.blogposts || [],
  tags: localStorage.tags || []
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
     }
  }
})

export const getPosts = (tags) => {
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
      .catch((err) => {
        console.log('Error:', err, 'Message:', err.message)
      })
  }
}
