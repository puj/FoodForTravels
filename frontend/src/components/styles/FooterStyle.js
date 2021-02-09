import styled from 'styled-components/macro'
import { ReactComponent as Icon } from './assets/github.svg'

export const StyledFooter = styled.footer`
background: #353539;
min-height: 10vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
bottom: 0;
text-align: center;
padding: 10px;
`
export const StyledSubtitle = styled.h3`
color: #fff;
font-size: 14px;
font-weight: 200;
margin: 0;
@media screen and (min-width: 1024px) {
  margin: 15px;
}
`
export const GithubIcon = styled(Icon)`
width: 30px;
fill: #fff;
height: 30px;
`