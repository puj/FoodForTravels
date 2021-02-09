export const SIGN_UP_URL = 'http://localhost:8080/users'
export const LOGIN_URL = 'http://localhost:8080/sessions'
export let GET_BLOGPOST_URL = (tags) => `http://localhost:8080/blogposts?tags=${tags.join()}` 
export let BLOGPOST_DETAILS_URL = (id) => `http://localhost:8080/blogposts/${id}`
export let CREATE_POST_URL = (id) => `http://localhost:8080/users/${id}/blogposts`
export let ADD_DESCRIPTION_URL = (id) => `http://localhost:8080/users/${id}/description`