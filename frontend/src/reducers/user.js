import { createSlice } from '@reduxjs/toolkit'
import { SIGN_UP_URL, LOGIN_URL, GET_BLOGPOST_URL, CREATE_POST_URL } from '../urls'

const initialState = {
    login: {
        accessToken: localStorage.accessToken || null,
        userId: localStorage.userId || 0,
        errorMessage: '',
        isLoggedIn: false,
    },
    posts: {
        //array? maybe not in the same initialstate as users?
    }
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            const { accessToken } = action.payload
            state.login.accessToken = accessToken
            console.log('accesstoken:', action.payload)
            localStorage.setItem('accessToken', accessToken)
        },
        setUserId: (state, action) => {
            const { userId } =action.payload
            state.login.userId = userId
            console.log('userId:', action.payload)
            localStorage.setItem('userId', userId )
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
export const signUp = (/* event */ username, email, password, fileInput) => {
    //event.preventDefault()
    return(dispatch, getStore) => {
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
    .then(json => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken}))
        dispatch(user.actions.setUserId({ userId: json.userId }))
    })
    .then(({ userId }) => {
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        fetch(`http://localhost:8080/users/${userId}`, {
            method: 'PATCH',
            body: formData, 
        })
    })
    .catch(err => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err.toString() }))
    })
    }
}

export const handleLogin = (event, username, password) => {
    //event.preventDefault()
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

export const handleLogout = () => {
    return (dispatch) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: null }))
        dispatch(user.actions.setAccessToken({ accessToken: null }))
        dispatch(user.actions.setUserId({ userId: 0 }))
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userId')
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
    //.then(({ id }) => {
    //    const formData = new FormData()
    //    formData.append('image', fileInput.current.files[0])
    //    fetch(`http://localhost:8080/users/${id}`, {
    //        method: 'PATCH',
    //        body: formData
    //    })
    //})
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