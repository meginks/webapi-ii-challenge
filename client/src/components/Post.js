import React from 'react'; 
import axios from 'axios'; 


class Post extends React.Component { 
    constructor(props) {
        super(props); 
    }

    render() {
    return (
        <div className="post">
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.contents}</p> 
        {/* <button onClick={() => this.deletePost(this.props.post.id)}>delete</button> */}
        </div>
    ) 
    }
}

export default Post;