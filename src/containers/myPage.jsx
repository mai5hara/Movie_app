import { connect } from 'react-redux';
// import { signOut } from '../store/actions/authActions';
import Mypage from '../pages/Mypage';

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mypage);