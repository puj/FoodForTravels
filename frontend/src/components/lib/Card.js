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
import { CreatePost } from '../CreatePost'

export const Card = ({
  gridpost,
  heading,
  innertext,
  profile,
  imageurl,
  postimage,
  username,
  createpostpage,
  whiteBackground,
  blogPost,
  description,
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
      {postimage && (
        <ImageWrapper>
          <Image src={imageurl} />
        </ImageWrapper>
      )}
      <CardHeading>{heading}</CardHeading>
      <InnerCard
        description={description}
        blogPost={blogPost}
        whiteBackground={whiteBackground}
      >
        <CardText blogPost={blogPost}>{innertext}</CardText>
        {profile && (
          <Link to='/createPost'>
            <Button buttonText='Create a new blogpost' />
          </Link>
        )}
        {createpostpage && <CreatePost />}
      </InnerCard>
    </CardWrapper>
  )
}
