import React from 'react';
import { PropTypes } from 'prop-types';
import {resetRequest} from "../../../redux/postsRedux";

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  
  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
    resetRequest();
  }

  render() {
  	const { posts, request, pagination } = this.props;

    if (request.pending === false && request.success === true && posts.length > 0) 
          return (
            <div> 
              <PostsList posts={posts} />
              <Pagination pages={10} onPageChange={(page) => { console.log(page) }} />
            </div>
          );

        else if (request.pending === true || request.success === null) 
          return <Spinner />

        else if (request.pending === false && request.error !== null) 
          return <Alert variant="error" children={request.error} />
        
        else if (request.pending === false && request.success === true && posts.length === 0) 
          return <Alert variant="info" children="- no posts -" />
    }

};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;