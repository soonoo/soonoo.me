import React from 'react';
import { connect } from 'react-redux';
import '../static/stylesheets/circle-loader.scss';
import { fetchPostList } from '../redux/actions';

class CircleLoader extends React.Component {
  render() {
    return this.props.isFetching ? <div className='loadeer' /> : <div />;
  }

  componentDidMount() {
    this.props.getPostList();
  }
}

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.postList.isFetching,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPostList: () => dispatch(fetchPostList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CircleLoader);

