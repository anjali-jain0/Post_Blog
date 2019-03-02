import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import Symbol from './img.png';
import './index.css';

class Home extends React.Component {

  render() {
    const posts=this.props.posts;
    const postList = posts.length ? (
      posts.map(post => {
          return (
          <div className='post card' key={post.id}>
            <img src={Symbol} className='img' alt='A post symbol' />
            <div className='card-content'>
              <Link to={'/post/' + post.id}>
              <span style={{color:'rgba(151,139,169,1)'}} className='card-title'>{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
          );
        }) ) : (
          <div className='center'>No posts yet</div>
    ); 

    return (
      <div className='container'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    );
      
  }
};

const mapStateToProps = (state) => {
  return {
    posts:state.posts
  }
}

export default connect(mapStateToProps)(Home);