import React from 'react';

class PostsCounter extends React.Component {

  render() {
    const { counter } = this.props;

    return (
            <div>Posts amount: { counter > 0 ? counter : ' 0 ' }</div>
        );
    }

};

export default PostsCounter;