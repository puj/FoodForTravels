import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 2em 6em 2em;
  background: #d7ecf3;
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
width: 50%;
background: #fff;
padding: 2em;
position: absolute;
`
export const Tagdiv = styled.div`
margin: 1em;
`