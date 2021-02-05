import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from './Button'
import {
  CardWrapper,
  CardHeading,
  CardText,
  InnerCard,
  ImageWrapper,
  Image,
} from '../styles/CardStyle'
import { CreatePost } from 'components/CreatePost'

export const Card = ({
  gridpost,
  heading,
  innertext,
  profile,
  imageurl,
  blogfeed,
  postimage,
  username,
  createpostpage
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
        {profile && (
          <Link to='/CreatePost'>
            <Button buttonText='Create a new blogpost'/>
          </Link>
        )}
        {createpostpage && (
          <CreatePost/>
        )}
      </InnerCard>
    </CardWrapper>
  )
}
