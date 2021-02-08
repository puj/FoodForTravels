import styled from 'styled-components/macro'

export const CardWrapper = styled.div`
  width: 100%;
  height: 25em;
  background: #353539;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  @media(min-width: 1024px) {
    max-width: 40em;
    justify-content: center;
    min-height: 100%;
  }
  ${({ gridpost }) =>
    gridpost &&
    `
        background: #C9F0A1;
        max-width: 15em;
        max-height: 7em;
        align-items: center;
        margin: 1em 0.3em;
        padding: 0.3em;
        &:hover {
            background: #d3f3b3;
        }
        @media (min-width: 1024px) {
          max-width: 10em;
        }
    `}
`
export const CardHeading = styled.h2`
  color: #fff;
  font-size: 1.2em;
`
export const CardText = styled.p`
  color: #353539;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ blogPost }) =>
    blogPost &&
    `
    white-space: pre-wrap;
  `}
`
export const InnerCard = styled.div`
  width: 80%;
  height: 70%;
  ${({ whiteBackground }) =>
    whiteBackground &&
    `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
  ${({ blogPost }) =>
    blogPost &&
    `
    justify-content: end;
  `}
  ${({ description }) =>
    description &&
    `
    justify-content: center;
    padding: 1em;
  `}
`
export const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  background: #c9f0a1;
  position: absolute;
  top: -7%;
  left: -10%;

  @media (min-width: 768px) {
    width: 15em;
    height: 15em;
    top: -10%;
  }
`
export const Image = styled.img`
  border-radius: 50%;
  width: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
`
