import React from 'react'
import styled from 'styled-components/macro'

const CardWrapper = styled.div`
    min-width: 12.5em;
    min-height: 18em;
    background: #353539;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({gridpost}) => gridpost &&`
        background: #C9F0A1;
        max-width: 4em;
        max-height: 4em;
        overflow: hidden;
        align-items: center;
    ` }
`
const CardHeading = styled.h2`
    color: #fff;
    font-size: 1.2em;
`
const CardText = styled.p`
    color: #353539;
`
const InnerCard = styled.div`
    background: #fff;
    width: 80%;
`
const ImageWrapper = styled.div`
    border-radius: 50%
`
const Image = styled.img`
    width: 100%;
`

export const Card = ({ gridpost, heading, innertext, profile, imageurl, blogfeed, postimage }) => {
    return(
        <CardWrapper gridpost={gridpost}>
        {profile && (
            <ImageWrapper>
                <Image src={imageurl? `${imageurl}`: '../assets/blank-profile-picture-973460_640.png'} alt={imageurl? 'profile image of person':'image-avatar'}/>
            </ImageWrapper>
        )}
        {blogfeed && postimage && (
            <ImageWrapper>
                <Image src={imageurl}/>
            </ImageWrapper>
        )}
        <CardHeading>{heading}</CardHeading>
        <InnerCard>
            <CardText>{innertext}</CardText>
        </InnerCard>
    </CardWrapper>
    )
}