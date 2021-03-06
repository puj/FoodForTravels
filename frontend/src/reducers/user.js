import { createSlice } from '@reduxjs/toolkit'

import {
  SIGN_UP_URL,
  LOGIN_URL,
  CREATE_POST_URL,
  ADD_DESCRIPTION_URL,
} from '../urls'

const initialState = {
  login: {
    username: localStorage.username || '',
    profileImage: localStorage.imageurl || '',
    accessToken: localStorage.accessToken || null,
    userId: localStorage.userId || 0,
    errorMessage: '',
    description: localStorage.description || '',
  },
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken)
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
      localStorage.setItem('userId', userId)
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.login.errorMessage = errorMessage
    },
    setUsername: (state, action) => {
      const { username } = action.payload
      state.login.username = username
      localStorage.setItem('username', username)
    },
    setProfileImage: (state, action) => {
      const { profileImage } = action.payload
      state.login.profileImage = profileImage
      localStorage.setItem('imageurl', profileImage) //set this string as a variable to avoid confusion
    },
    setDescription: (state, action) => {
      const { description } = action.payload
      state.login.description = description
      localStorage.setItem('description', description)
    },
  },
})

//THUNKS
export const signUp = (username, email, password, fileInput) => {
  return (dispatch, getStore) => {
    fetch(SIGN_UP_URL, {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not create user')
        }
        return res.json()
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
        dispatch(user.actions.setUsername({ username: json.username }))
        return json
      })
      .then((json) => {
        const userId = getStore().user.login.userId
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        fetch(`http://localhost:8080/users/${userId}`, {
          method: 'PATCH',
          body: formData,
        })
          .then((res) => res.json())
          .then((json) => {
            dispatch(
              user.actions.setProfileImage({
                profileImage: json.profileImage.imageUrl,
              })
            )
          })
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
      })
  }
}

export const login = (username, password) => {
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            'Unable to log in. Please check that your username and password is correct'
          )
        }
        return res.json()
      })
      .then((json) => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
        dispatch(user.actions.setUsername({ username: json.username }))
        dispatch(
          user.actions.setProfileImage({ profileImage: json.profileImage })
        )
        dispatch(user.actions.setDescription({ description: json.description }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
    dispatch(user.actions.setUsername({ username: '' }))
    dispatch(user.actions.setProfileImage({ profileImage: '' }))
    dispatch(user.actions.setDescription({ description: '' }))
    localStorage.clear()
  }
}

export const addUserDescription = (userId, accesstoken, userDescription) => {
  return (dispatch) => {
    fetch(ADD_DESCRIPTION_URL(userId), {
      method: 'PATCH',
      body: JSON.stringify({ description: userDescription }),
      headers: {
        Authorization: accesstoken,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not add user description')
        }
        return res.json()
      })
      .then((json) => {
        dispatch(user.actions.setDescription({ description: json.description }))
      })
  }
}

export const createBlogPost = (userid, accesstoken, title, blogText, tags) => {
  return (dispatch) => {
    fetch(CREATE_POST_URL(userid), {
      method: 'POST',
      body: JSON.stringify({ title, text: blogText, tags }),
      headers: {
        Authorization: accesstoken,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not create post. Check that your title has at least two characters and your blogtext at least 20 characters.')
        }
        return res.json()
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
      })
      /* .then(({ id }) => {
              const formData = new FormData()
              formData.append('image', fileInput.current.files[0])
              fetch(`http://localhost:8080/users/${id}`, {
                  method: 'PATCH',
                  body: formData
              })
          }) */
  }
}