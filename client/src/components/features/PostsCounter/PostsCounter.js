import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  render() {
    const { counter } = this.props;

    return (
            <div>Posts amount: {counter > 0 ? counter : 'no posts'}</div>
        );
    }

};

PostsCounter.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    )
};

export default PostsCounter;