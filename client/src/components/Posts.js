import React from 'react'; 


const Posts = props => {
    console.log('posts props', props)
    return (
        <div>
            {props.posts.map((post) => {
                return (
                <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.contents}</p>
                </div>
                )
            })}
        </div>
    )
} 

export default Posts;