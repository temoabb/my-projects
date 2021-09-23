import { FETCH_POSTS, NEW_POST } from "../actions/types";

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => (dispatch) => {
  console.log('fetch action called');
  fetch(url)
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  console.log("action called");
  fetch(url, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
