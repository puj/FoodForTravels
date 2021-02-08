import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {fetchBlogPosts} from '../reducers/user'
import { GET_BLOGPOST_URL } from '../urls'

import { Card } from 'components/lib/Card'
import { GridFeed } from 'components/styles/Containers'

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
    /* fetchBlogPosts((json) => {
      setBlogposts(json)
    }) */
  }, [])
  
  return (
    <GridFeed>
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
    </GridFeed>
  )
}
