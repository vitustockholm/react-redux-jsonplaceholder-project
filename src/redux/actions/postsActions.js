import axios from 'axios';

import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAIL,
} from '../constants/postsConstants';

const displayPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST });

    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    dispatch({ type: POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POSTS_FAIL, payload: error.message });
  }
};

export default displayPosts;
