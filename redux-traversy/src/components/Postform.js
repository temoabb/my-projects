import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { createPost } from "../actions/postActions";

// const url = "https://jsonplaceholder.typicode.com/posts";

class Postform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="titleinput">Title :</label>
          <br />
          <input
            type="text"
            name="title"
            id="titleinput"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <br />
          <textarea name="body" id="body" onChange={this.onChange} />
        </div>
        <button type="subtmi">Add Post</button>
        <hr />
      </form>
    );
  }
}

// const mapDispatchToProps = () => {};

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);
