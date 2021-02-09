import styled from 'styled-components/macro'

export const StyledHeader = styled.header`
background: #353539;
position: relative;
min-height: 20vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 20px;
`

export const Title = styled.h1`
font-size: 2.5em;
text-align: center;
color: #fff;
margin: 0;

@media (min-width: 768px) {
  font-size: 3.2em;
}
`

export const SubTitle = styled.h2`
font-size: 1em;
color: #fff;
font-weight: 400;
font-style: italic;
text-align: center;

@media (min-width: 768px) {
  font-size: 1.2em;
}
`

export const Links = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
top: 0;

@media (min-width: 768px) {
  right: 0;
}
`

export const LinkText = styled.p`
color: #fff;
margin: 5px;
&:hover {
  transform: scale(1.1);
}
`