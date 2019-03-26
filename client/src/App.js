import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4002/api/posts/') 
      .then( posts => this.setState({
          posts: posts.data
        })
      )
      .catch(err => console.log(err))
  } 

  deletePost = (id) => {
    axios
    .delete(`http://localhost:4002/api/posts/${id}`) 
    .then( res => {
      this.setState({
        posts: res.data
      })
    }) 
    .catch( err => console.log(err))
  }  

  render() {
    console.log("posts", this.state.posts);
    return (
      <div className="App">
      <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
