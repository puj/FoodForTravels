import { createSlice } from '@reduxjs/toolkit'
import { SIGN_UP_URL, LOGIN_URL, GET_BLOGPOST_URL, CREATE_POST_URL } from '../urls'

const initialState = {
    login: {
        accessToken: null,
        userId: 0,
        errorMessage: '',
        isLoggedIn: false,
    },
    posts: {
        //array?
    }
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
            const { userId } =action.payload
            state.login.userId = userId
            localStorage.setItem('Userid', userId )
        },
        setErrorMessage: (state, action) => {
            const { errorMessage } = action.payload
            state.login.errorMessage = errorMessage
        }
    }
})

export const blogposts = createSlice({
    name: 'blogposts',

})

//THUNKS
export const handleSignUp = (event) => {
    event.preventDefault()
    return(dispatch) => {
      fetch(SIGN_UP_URL, {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Could not create user')
        }
        return res.json()
    })
    /* .then(({ id }) => {
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        fetch(`http://localhost:8080/users/${id}`, {
            method: 'POST',
            body: formData
        })
    }) */
    .then(json => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken}))
        dispatch(user.actions.setUserId({ userId: json.userId }))
    })
    .catch(err => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
    })
    }
}

export const handleLogin = (event) => {
    event.preventDefault()
    return(dispatch) => {
        fetch(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        })
        .then(res => {
            if(!res.ok) {
                throw new Error('Unable to log in. Please check that your username and password is correct')
            } 
            return res.json()
        })
        .then(json => {
            dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
            dispatch(user.actions.setUserId({ userId: json.userId }))
        })
        .catch(err => {
            dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
        })
    }
}

/* export const createBlogPost = () => {
    fetch(CREATE_POST_URL, {
        method: 'POST',
        body: JSON-stringify({ author, text, tags }),
        headers: { 'Content-Type': 'application/json'},
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Could not create post')
        }
        return res.json()
    })
    .then(json => {

    })
} */

export const fetchBlogPost = () => {
    fetch(GET_BLOGPOST_URL, {
        method: 'GET',
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Could not get any posts')
        }
        return res.json()
    })
    .then(json => {
        console.log(json)
    })
    .catch(err => {
        console.log('Error:', err)
    })
}