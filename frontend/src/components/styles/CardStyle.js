import styled from 'styled-components/macro'

export const CardWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background: #353539;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 40em;
    justify-content: center;
    min-height: 100%;
  }
  ${({ blogfeed }) =>
    blogfeed &&
    `
    text-align: center;
    height: 15em;

    @media(min-width: 768px) {
      height: 25em;
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
  ${({ previewCard }) =>
    previewCard &&
    `
    white-space: pre-wrap;
  `}
`
export const InnerCard = styled.div`
  width: 80%;
  height: 70%;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  ${({ whiteBackground }) =>
    whiteBackground &&
    `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
  `}
  ${({ previewCard }) =>
    previewCard &&
    `
    background: #fff;
    max-height: 9em;
    overflow: scroll;
    @media(min-width: 768px){
      max-height: 70%;
    }
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
  width: 7em;
  height: 7em;
  background: #c9f0a1;
  position: absolute;
  top: -7%;
  left: -10%;

  @media (min-width: 768px) {
    width: 12em;
    height: 12em;
    top: -15%;
    left: -3%;
  }
  @media (min-width: 1024px) {
    width: 13em;
    height: 13em;
    top: -10%;
  }
`
export const Image = styled.img`
  border-radius: 50%;
  width: 70%;
  height: 70%;
  object-fit: cover;
  position: absolute;
  top: 15%;
  left: 15%;
`
