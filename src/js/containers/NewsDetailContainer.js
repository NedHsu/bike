import { connect } from 'react-redux';
import News from '../components/NewsDetail';
import { getNewsDetail } from '../actions/newsActions';

export default connect(
  state => ({
  	title: state.getIn(['news', 'title'])
  }),
  (dispatch) => ({
  	getNews: () =>(
  		dispatch(getNews())
	)
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { getNews } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      getNews: getNews(),
    });
  }
)(News);