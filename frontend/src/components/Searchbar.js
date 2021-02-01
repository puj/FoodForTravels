import React from 'react'
import styled from 'styled-components/macro'

const StyledSearchbar = styled.input`
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
    box-shadow: 3px 4px 8px -3px rgba(0,0,0,0.7);
    &:hover {
        background: #5d5d5e;
        transform: scale(1.1);
    }

    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
    
    @media screen and (min-width: 1024px) {
        width: 50px;
        height: 50px;
        font-size: 16px;
    }
    `

export const Searchbar = () => {
  return (
    <form>
      <label>
        <StyledSearchbar type='text' placeholder='Search for a destination' />
      </label>
      <SearchButton type='submit'>GO</SearchButton>
    </form>
  )
}
