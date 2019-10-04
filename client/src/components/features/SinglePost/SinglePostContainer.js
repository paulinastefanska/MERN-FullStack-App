import { connect } from 'react-redux';
import { getRequest, loadSinglePostRequest, getSinglePost, resetRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  posts: getSinglePost(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadPost: (id) => dispatch(loadSinglePostRequest(id)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);