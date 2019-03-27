import React from 'react'; 
import Post from './Post';

const Posts = props => {
    console.log('posts props', props)
    return (
        <div>
            {props.posts.map((post) => {
                return (
                    <Post post={post} key={post.id} />
                )
            })}
        </div>
    )
} 

export default Posts;