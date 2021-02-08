import styled from 'styled-components/macro'
import Editext from 'react-editext'
import TagsInput from 'react-tagsinput'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 2em 6em 2em;
  background: #d7ecf3;
  height: 70vh;
  overflow: scroll;
`

export const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  min-height: 100vh;
  width: 100%;
  position: absolute;
`

export const GridFeed = styled.div`
display: grid;
justify-items: center;
width: 100%;
max-height: 50%;
padding: 3em 2em 1em 2em;

@media (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
}
@media (min-width: 1024px) {
  grid-template-columns: repeat(4, 1fr);
}
`
export const CreatePostWrapper = styled.div`
display: flex;
flex-direction: column;
height: 80%;
overflow-y: scroll;
width: 80%;
background: #fff;
padding: 2em;
position: absolute;
margin: 1em 0;
`
export const Tagdiv = styled.div`
margin: 1em;
display: flex;
flex-direction: column;
font-size: 0.7em;
`

export const StyledTagsInput = styled(TagsInput)`
span[tagsinput="react-tagsinput-tag"] {
  background: blue;
}
`

export const StyledEdiText = styled(Editext)`
div[editext="view-container"], div[editext="edit-container"] {
  display: flex;
  max-height: 10em;
  overflow: scroll;
  margin: 1em;
}
textarea {
  max-height: 10em;
  overflow-y: scroll;
}
button[editext="edit-button"],[editext="save-button"], button[editext="cancel-button"] {
  width: 0.5em;
  height: 0.5em;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
}
`