import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { signOut } from '../store/actions/authActions';
import { signUp } from '../store/actions/authActions';
import Navbar from '../components/organisms/Navbar';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut()),
    signUp: (newUser) => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);