export const SIGN_UP_URL = 'http://localhost:8080/users'
export const LOGIN_URL = 'http://localhost:8080/sessions'
export const GET_BLOGPOST_URL = 'http://localhost:8080/blogposts'
export let CREATE_POST_URL = (id) => `http://localhost:8080/users/${id}/blogposts`
export let ADD_DESCRIPTION_URL = (id) => `http://localhost:8080/users/${id}/description`