import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { blogposts } from '../reducers/blogposts'

import { Wrapper } from '../components/styles/Containers'
import { Button } from './lib/Button'

export const StyledSearchbar = styled.input`
  border-radius: 15px;
  border: 1px solid #353539;
  text-align: center;

  @media (min-width: 768px) {
    width: 250px;
    height: 40px;
    border-radius: 25px;
  }

  @media screen and (min-width: 1024px) {
    width: 450px;
    height: 50px;
    border-radius: 30px;
    font-size: 20px;
  }
`

export const Searchbar = () => {
  const [querytags, setQueryTags] = useState([])
  const dispatch = useDispatch()
  
  const onTagsQuery = () => {
    dispatch(blogposts.actions.setTags(querytags))
  }

  return (
    <Wrapper>
      <form>
        <label>
          <StyledSearchbar
            type='text'
            value={querytags}
            placeholder='Search for a destination'
            onChange={(event) => setQueryTags(event.target.value)}
          />
        </label>
        <Link to='/blogfeed'>
          <Button logoutbutton={true} buttonText='Show blogposts' onClickFunction={onTagsQuery} />
        </Link>
      </form>
    </Wrapper>
  )
}
