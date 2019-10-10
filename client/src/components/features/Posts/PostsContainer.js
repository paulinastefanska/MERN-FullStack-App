import { connect } from 'react-redux';
import { getPosts, getRequest, loadPostsByPageRequest, getPages, presentPage } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: presentPage(state),
})

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page) => dispatch(loadPostsByPageRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);