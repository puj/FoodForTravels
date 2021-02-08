import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BLOGPOST_DETAILS_URL } from '../urls'
import { Card } from '../components/lib/Card'

export const BlogPost = () => {
  const [individualBlogpost, setIndividualBlogpost] = useState([])
  const { blogpostid } = useParams()

  useEffect(() => {
    fetch(BLOGPOST_DETAILS_URL(blogpostid), {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not find any blogposts with that id')
        }
        return res.json()
      })
      .then((json) => {
        setIndividualBlogpost(json)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, [blogpostid])

  return (
    <>
      <Card
        whiteBackground
        heading={individualBlogpost.title}
        innertext={individualBlogpost.text}
      />
    </>
  )
}
