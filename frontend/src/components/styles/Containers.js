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
  min-width: 100vw;

  @media(min-width: 768px) {
    height: 70vh;
  }
`

export const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  position: absolute;
  overflow: hidden;
  min-height: 100vh;
  background: #d7ecf3;
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
  div[react-tagsinput='react-tagsinput-tag'] {
    display: flex;
    flex-direction: column;
  }
`

export const StyledEdiText = styled(Editext)`
  div[editext='view-container'],
  div[editext='edit-container'] {
    display: flex;
    max-height: 10em;
    overflow: scroll;
    margin: 1em;
  }
  textarea {
    max-height: 10em;
    overflow-y: scroll;
  }
  button[editext='edit-button'],
  [editext='save-button'],
  button[editext='cancel-button'] {
    width: 0.5em;
    height: 0.5em;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  }
`
