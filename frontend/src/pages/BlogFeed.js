import React from 'react'
import { handleLogout } from '../reducers/user'

import { Button } from '../components/reusable/Button'


export const BlogFeed = () => {
    return(
        <>
        <h1>HEllo!</h1>
        <Button onClickFunction={handleLogout}/>
        </>
    )
}