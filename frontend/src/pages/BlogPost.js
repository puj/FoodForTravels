import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BLOGPOST_DETAILS_URL } from '../urls'
import { Card } from '../components/lib/Card'

export const BlogPost = () => {
  const [individualBlogpost, setIndividualBlogpost] = useState([])
  const { blogpostid } = useParams()
  console.log('param:',blogpostid)

  useEffect(() => {
    fetch(BLOGPOST_DETAILS_URL(blogpostid), {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not find any bloposts with that id')
        }
        return res.json()
      })
      .then((json) => {
        console.log('response:', json)
        setIndividualBlogpost(json)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, [blogpostid])

  //This is wrong. Somehow this only fetches the first object in the database. 
  return (
    <>
    {console.log(individualBlogpost)}
      <Card
        heading={individualBlogpost.title}
        innertext={individualBlogpost.text}
      />
    </>
  )
}
