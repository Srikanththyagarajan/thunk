import React, { Component } from 'react';
import RedditPost from './RedditPost'
import AddPost from './AddPost'
import moment from 'moment'
import _ from 'lodash'
import { connect } from 'react-redux'
import { newPost, loadPosts, updateTitle, savePost } from './redux/actions/posts'
import postsSelector from './redux/selectors/posts'
import firebase from 'firebase'


class RedditPosts extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch(loadPosts())
    this.dispatchFun=()=>{
      this.props.dispatch({type:'MY_NEW_POST',payload:{'hello':'world'}});
    }
  }

 

  render() {
    return (
      <div className="App">
      <button onClick={this.dispatchFun}>dispatch</button>
        <AddPost
          editingPost={this.props.editingPost}
          onPostTitleChange={(title) => this.props.dispatch(updateTitle(title))}
          onAdd={() => {
            this.props.dispatch(savePost())
          }}
        />
        {this.props.isLoading ? <p>Loading...</p> : null}
        {_.map(this.props.posts, (i,redditPost) => {
          return <RedditPost
            key={i}
            title={redditPost.title}
            userName={redditPost.userName}
            comments={redditPost.comments}
            submitted={redditPost.submitted}
          />
        })}
      </div>
    );
  }
}
export default connect(state => postsSelector(state))(RedditPosts);
