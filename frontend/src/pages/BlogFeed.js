import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { getPosts, blogposts } from '../reducers/blogposts'
import { Card } from 'components/lib/Card'
import { Button } from 'components/lib/Button'
import { Wrapper } from 'components/styles/Containers'

export const BlogFeed = () => {
  const tags = useSelector((store) => store.blogposts.tags)
  const blogpostArray = useSelector((store) => store.blogposts.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts(tags))
    // eslint-disable-next-line
  }, [])

  const onBack = () => {
    dispatch(blogposts.actions.setClearBlogposts())
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrow: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const StyledSlider = styled(Slider)`
    width: 100%;
    display: flex;
    .slick-slide > div {
      margin: 1em;
    }
    .slick-prev:before {
      color: rgba(25, 25, 25, 0.9);
    }
    .slick-next:before {
      color: rgba(25, 25, 25, 0.9);
    }
    .slick-dots li button:before {
      color: rgba(25, 25, 25, 0.9);
      font-size: 10px;
      margin: 20px 0;
    }

    @media (min-width: 768px) {
    }
  `

  return (
    <Wrapper>
      <Link to='/'>
        <Button backbutton={true} buttonText='Back' onClickFunction={onBack} />
      </Link>
      {blogpostArray.length === 0 && 
      <p>Sorry, couldn't fin any posts. Try to go back and search again.</p>}
      <StyledSlider {...settings}>
        {blogpostArray.map((blogpost) => {
          return (
            <div key={blogpost._id}>
              <Link to={`/blogposts/${blogpost._id}`}>
                <Card
                  blogfeed={true}
                  previewCard={true}
                  heading={blogpost.title}
                  innertext={blogpost.text}
                ></Card>
              </Link>
            </div>
          )
        })}
      </StyledSlider>
    </Wrapper>
  )
}
