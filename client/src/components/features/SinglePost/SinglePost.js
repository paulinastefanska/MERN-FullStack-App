import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

class SinglePost extends React.Component {
  
  componentDidMount() {
    const { loadPost, match } = this.props;
    loadPost(match.params.id);
  }

  render() {
  	const { posts, request } = this.props;

    if (request.pending === false && request.success === true && posts.length > 0) 
          return (
          	<div>
              <PageTitle>{ posts[0].title }</PageTitle>
              <HtmlBox>{ posts[0].content }</HtmlBox>
            </div>
          );  

        else if (request.pending === true || request.success === null) 
          return <Spinner />

        else if (request.pending === false && request.error !== null) 
          return <Alert variant={'error'} children={request.error} />
        
        else if (request.pending === false && request.success === true && posts.length === 0) 
          return <Alert variant={'info'} children={'- no posts -'} />
    }

};

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);