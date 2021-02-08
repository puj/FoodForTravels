import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { GET_BLOGPOST_URL } from '../urls'

import { Card } from 'components/lib/Card'
import { GridFeed, Wrapper, Test } from 'components/styles/Containers'

export const BlogFeed = () => {
  const [blogposts, setBlogposts] = useState([])

  useEffect(() => {
    fetch(GET_BLOGPOST_URL, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not get any posts')
        }
        return res.json()
      })
      .then((json) => {
        setBlogposts(json)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrow: true,
    centerMode: true,
    variableWidth: true,
  }

  const StyledSlider = styled(Slider)`
    slick-prev:before {
      color: rgba(25, 25, 25, 0.9);
    }
    .slick-next:before {
      color: rgba(25, 25, 25, 0.9);
    }
    .slick-arrow {
      margin: 60px 118px;
      z-index: 1;
    }
    .slick-dots li button:before {
      color: rgba(25, 25, 25, 0.9);
      font-size: 10px;
      margin: 20px 0;
    }
    .slick-slide {
      width: 70em;
      box-sizing: border-box;
    }
  `

  return (
    //<GridFeed>
    <Wrapper>
        <StyledSlider {...settings}>
          {blogposts.map((blogpost) => {
            return (
              <div key={blogpost._id}>
                <Link to={`/blogposts/${blogpost._id}`}>
                  <Card
                    blogfeed
                    gridpost={true}
                    heading={blogpost.title}
                    innertext={blogpost.text}
                  />
                </Link>
              </div>
            )
          })}
        </StyledSlider>
    </Wrapper>
    //</GridFeed>
  )
}
