import React from 'react'
import {useRouter} from 'next/router';
import Header from '../../component/Header';
const Post = () => {
    const router = useRouter() 
    return (
        <div>
           
            <h1 onClick={()=> router.push('/')}>Hello there post</h1>
        </div>
    )
}

export default Post
