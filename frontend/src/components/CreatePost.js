import React from 'react'
import styled from 'styled-components/macro'

import { BlogPostInput } from './BlogPostInput'

const CreatePostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

export const CreatePost = () => {
    return (
        <CreatePostWrapper>
            <BlogPostInput/>
        </CreatePostWrapper>
    )
}