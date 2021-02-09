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
  blogfeed,
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
  previewCard
}) => {
  return (
    <CardWrapper blogfeed={blogfeed}>
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
        previewCard={previewCard}
      >
        <CardText previewCard={previewCard} blogPost={blogPost}>{innertext}</CardText>
        {profile && (
          <Link to='/createPost'>
            <Button buttonText='Create a new blogpost' />
          </Link>
        )}
      </InnerCard>
      {createpostpage && <CreatePost />}
    </CardWrapper>
  )
}
