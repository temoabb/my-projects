import React from "react";
import Postform from "./Postform";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

import PropTypes from "prop-types";

class Posts extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    console.log("received props");
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    console.log("render Posts");
    console.log("posts props", this.props);

    // console.log("this.props.posts", this.props.posts);

    const postsData = this.props.posts.map((post) => (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <Postform />
        <h1>Posts:</h1>
        {postsData}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);