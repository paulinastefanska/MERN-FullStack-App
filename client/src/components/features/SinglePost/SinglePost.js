import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config'
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';

import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import PageTitle from '../../common/PageTitle/PageTitle';

class SinglePost extends React.Component {
  
  componentDidMount() {
    const { loadPost, resetRequest, match } = this.props;
    loadPost(match.params.id);
    resetRequest();

  }

  render() {
  	const { posts, request } = this.props;
    const { location } = this.props;

    if (request.pending === false && request.success === true && posts.length > 0) 
          return (
          	<React.Fragment>
              <PageTitle>{ posts[0].title }</PageTitle>
              <FacebookProvider appId="965381443794607">
                <ShareButton href={`${BASE_URL}/${location.pathname}`}>
                  Share
                </ShareButton>
              </FacebookProvider>
              <p>Author: { posts[0].author }</p>
              <HtmlBox>{ posts[0].content }</HtmlBox>
              <FacebookProvider appId="965381443794607">
                <Comments href={`${BASE_URL}/${location.pathname}`} />
              </FacebookProvider>
            </React.Fragment>
          );  

        else if (request.pending === true || request.success === null) 
          return <Spinner />

        else if (request.pending === false && request.error !== null) 
          return <Alert variant="error" children={request.error} />
        
        else if (request.pending === false && request.success === true && posts.length === 0) 
          return <Alert variant="info" children="- no posts -" />
    }

};

SinglePost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPost: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);