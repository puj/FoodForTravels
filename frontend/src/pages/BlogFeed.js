import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {fetchBlogPosts} from '../reducers/user'

import { Card } from 'components/lib/Card'
import { GridFeed } from 'components/styles/Containers'

export const BlogFeed = () => {
  const [blogposts, setBlogposts] = useState([])

  useEffect(() => {
    fetchBlogPosts((json) => {
      setBlogposts(json)
    })
  }, [])

console.log(blogposts)
//This is correct, all blogposts are correct here, even when console.log in return
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
