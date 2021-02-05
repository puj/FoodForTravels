import React from 'react'
import styled from 'styled-components/macro'

const CardWrapper = styled.div`
  width: 40em;
  height: 30em;
  background: #353539;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${({ gridpost }) =>
    gridpost &&
    `
        background: #C9F0A1;
        width: 15em;
        height: 7em;
        align-items: center;
        margin: 1em 0.3em;
        padding: 0.3em;
        &:hover {
            background: #d3f3b3;
        }
    `}
`
const CardHeading = styled.h2`
  color: #fff;
  font-size: 1.2em;
`
const CardText = styled.p`
  color: #353539;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const InnerCard = styled.div`
  width: 80%;
  height: 70%;
  ${({ profile }) =>
    profile &&
  `
    background: #fff;
    display: flex;
    justify-content: center;
  `}
`
const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 15em;
  height: 15em;
  background: #c9f0a1;
  position: absolute;
  top: -10%;
  left: -10%;
`
const Image = styled.img`
  border-radius: 50%;
  width: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
`

export const Card = ({
  gridpost,
  heading,
  innertext,
  profile,
  imageurl,
  blogfeed,
  postimage,
  username,
}) => {
  return (
    <CardWrapper gridpost={gridpost}>
      {profile && (
        <ImageWrapper>
          <Image
            src={
              imageurl
                ? `${imageurl}`
                : '../assets/blank-profile-picture-973460_640.png'
            }
            alt={imageurl ? `profile-image of ${username}` : 'image-avatar'}
          />
        </ImageWrapper>
      )}
      {blogfeed && postimage && (
        <ImageWrapper>
          <Image src={imageurl} />
        </ImageWrapper>
      )}
      <CardHeading>{heading}</CardHeading>
      <InnerCard profile={profile}>
        <CardText>{innertext}</CardText>
      </InnerCard>
    </CardWrapper>
  )
}
