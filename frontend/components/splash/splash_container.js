import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = (state, ownProps) => ({
    path: ownProps.location.pathname
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Splash);