import React from 'react'
import styled from 'styled-components'

const StyledSearchbar = styled.input`
    border-radius: 5px;
    border: 1px solid #353539;
    `
const SearchButton = styled.button`
    border-radius: 50%;
    background: #353539;
    color: #fff;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border: none;
    padding: 2px;
    font-size: 12px;
    &:hover {
        background: #5d5d5e;
    }
    `

export const Searchbar = () => {
  return (
    <form>
      <label>
        <StyledSearchbar type='text' placeholder='search for a destination' />
      </label>
      <SearchButton type='submit'>GO</SearchButton>
    </form>
  )
}
